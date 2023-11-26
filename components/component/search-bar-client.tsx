'use client'

import { Session } from '@supabase/supabase-js'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useCallback, useState, useEffect } from 'react'
import { type } from 'os'
import { get } from 'http'
import Fuse from "fuse.js";
import { cn } from '@/lib/utils'

export default function SearchBarClient({session} : {session: Session | null}) {
    const supabase = createClientComponentClient();
    const [subjectsData, setSubjcetsData] = useState<any[]>([]);
    const [searchResults, setSearchResults] = useState(subjectsData);
    const [subjectName, setSubjectName] = useState<string | null>()
    const options = {
        includeScore: true,
        includeMatches: true,
        threshold: 0.4,
        keys: ["name"],
    }
    const fuse = new Fuse(subjectsData, options);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value)

        if (event.target.value.length === 0) {
            setSearchResults([])
        }

        const results = fuse.search(subjectName || "");
        const items = results.map((result) => result.item);
        setSearchResults(items);
    }
    useEffect(() => {
        const getSubjects = async() => {
            try {
                const {data:data, error, status} = await supabase.from("subjects").select();
                if (error && status !== 406) {
                    throw error
                }
                if (data) {
                    setSubjcetsData(data);
                }
            } catch (error) {
                alert(error)
                throw error
            }
        };
        getSubjects();
    }, [supabase])
    

    return (
    <>
    
    {session ? (
        <div className=' relative flex justify-center items-center flex-col gap-0'>
            <div className="flex w-full max-w-sm items-center">
                <Input type="text" className="rounded-r-[0px] focus-visible:ring-0 " placeholder="Search for subjects..." onChange={handleChange} />
                <Button type="submit" variant={"default"} className="rounded-l-[0px] ring-0 text-foreground">Search</Button>
            </div>
            {searchResults.length !== 0 && (
                <div className={cn('group-["search"] absolute w-full shadow-xl shadow-foreground/5 top-[100%] -z-2', (subjectName?.length === 0 ? 'hidden' : ''))}>
                {searchResults.map((subject, index) => (
                        <div key={index} className='flex-col justify-center items-center w-full border-b-primary border-b-[1px]'>
                            <p className='text-left ml-3 mt-2'>{subject.name}</p>
                            <p className="text-xs ml-3 mb-2 text-left">Semester {subject.semester}</p>
                        </div>
                        ))}
            </div>
            )}
            
        </div>
    ) : (
        <div className="flex w-full max-w-sm items-center">
            <Input type="text" className="rounded-r-[0px] focus:ring-0" placeholder="Search for subjects..." />
            <Button type="submit" variant={"default"} className="rounded-l-[0px]">Search</Button>
        </div>
    )}
    
    </>
  )
}
