'use client'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '@/types/supabase'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import type { PostgrestError } from '@supabase/supabase-js'

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const [college, setCollege] = useState<string | null>(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)
      const userID : string = user?.id || "";

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url, college`)
        .eq('id', userID)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
        setCollege(data.college)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    fullname,
    website,
    avatar_url,
    college
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
    college: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
        college: college
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error : any) {
      alert(`Error updating the data...\n${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center min-w-screen px-8 py-24'>
      <div className="flex justify-center items-center flex-col lg:w-[450px] w-full gap-4 p-12 rounded-2xl shadow-2xl shadow-foreground/5">
        <div className='w-full'>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" value={session?.user.email} disabled />
        </div>
        <div className='w-full'>
          <Label htmlFor="fullName">Name</Label>
          <Input
            id="fullName"
            type="text"
            value={fullname || ''}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <Label htmlFor="college">College Name</Label>
          <Input
            id="college"
            type="text"
            value={college || ''}
            onChange={(e) => setCollege(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <Label htmlFor="website">Avatar URL</Label>
          <Input
            id="avatar_url"
            type="url"
            value={avatar_url || ''}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>
        <div className='w-full pt-4'>
          <Button
            className="w-full"
            onClick={() => updateProfile({ fullname, username, website, avatar_url, college })}
            disabled={loading}
            variant={"default"}
          >
            {loading ? 'Loading ...' : 'Update Profile'}
          </Button>
        </div>
        <div className='w-full'>
          <form action="/auth/signout" method="post">
            <Button className="w-full hover:bg-primary/10" variant={"outline"} type="submit">
              Sign Out
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}