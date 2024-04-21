'use client';

import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useCallback, useState, useEffect } from 'react';
import Fuse, { IFuseOptions } from 'fuse.js';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { LuSearch } from 'react-icons/lu';

export default function SearchBarClient({ subjects }: { subjects: any[] | null }) {
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [subjectName, setSubjectName] = useState<string | null>();
	const [show, setShow] = useState(true);
	const options: IFuseOptions<any> = {
		includeScore: true,
		includeMatches: true,
		threshold: 0.5,
		keys: ['name'],
		minMatchCharLength: 2,
		findAllMatches: true,
		shouldSort: true
	};
	const fuse = new Fuse(subjects ?? [], options as IFuseOptions<any>);
	const router = useRouter();
	const handleClick = () => {
		if (typeof subjectName !== 'string') {
			return;
		}
		router.push(`/search/${subjectName === undefined ? '' : subjectName}`);
	};
	const handleInputFocus = () => {
		setShow(true);
	};

	const handleInputBlur = () => {
		// Delay hiding the results to give time for a click on the results
		setTimeout(() => {
			setShow(false);
		}, 500);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSubjectName(event.target.value);
		if (event.target.value.length === 0) {
			setSearchResults([]);
		}

		const results = fuse.search(subjectName || '');
		const items = results.map((result) => result.item);
		setSearchResults(items);
	};
	// useEffect(() => {
	//     const getSubjects = async() => {
	//         try {
	//             const {data:data, error, status} = await supabase.from("subjects").select();
	//             if (error && status !== 406) {
	//                 throw error
	//             }
	//             if (data) {
	//                 setSubjectData(data);
	//             }
	//         } catch (error) {
	//             alert(error)
	//             throw error
	//         }
	//     };
	//     getSubjects();
	// }, [supabase])

	return (
		<>
			<div className="w-full relative flex justify-center items-center flex-col gap-0 z-10">
				<div className="flex w-full items-center">
					<Input
						type="text"
						className="rounded-r-[0px] ring-0 focus-visible:ring-0 border-2 md:h-12 h-10 border-border/50 hover:border-border/70 transition-all duration-300 ease-in-out focus-within:border-border/70 focus:border-border/70 w-full bg-background/10 backdrop-blur-sm"
						placeholder="Search for subjects..."
						onChange={handleChange}
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
					/>
					<Button
						type="submit"
						variant={'expandIcon'}
						className="rounded-l-[0px] ring-0 dark:text-foreground text-background md:py-6 py-4 md:px-8 px-6"
						onClick={handleClick}
						Icon={LuSearch}
						iconPlacement="right"
					>
						Search
					</Button>
				</div>
				{searchResults?.length !== 0 && show && (
					<div
						className={cn(
							'group-["search"] absolute w-full top-[100%] rounded-lg bg-transparent',
							subjectName?.length === 0 ? 'hidden' : ''
						)}
					>
						{searchResults?.map((subject, index) => (
							<Link href={`/subject/${subject.name}`} key={index}>
								<div className="flex-col justify-center items-center w-full border-b-primary rounded-b-lg border-b-[1px] bg-background/40 backdrop-blur-md">
									<p className="text-left ml-3 mt-2">{subject.name}</p>
									<p className="text-xs ml-3 mb-2 text-left">Semester {subject.semester}</p>
								</div>
							</Link>
						))}
					</div>
				)}
				{searchResults?.length === 0 && subjectName && (
					<div
						className={cn(
							'group-["search"] absolute w-full top-[100%] rounded-lg bg-background/50 backdrop-blur-md',
							subjectName?.length === 0 ? 'hidden' : ''
						)}
					>
						<div className="flex-col justify-center items-center w-full border-b-primary rounded-b-lg border-b-[1px] bg-background/40 backdrop-blur-md">
							<p className="text-left ml-3 mt-2 mb-2">No results found for {subjectName}</p>
							{/* <p className="text-xs ml-3 mb-2 text-left">
                                Semester {subject.semester}
                            </p> */}
						</div>
					</div>
				)}
			</div>
		</>
	);
}
