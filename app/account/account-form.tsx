'use client';
import { useState } from 'react';
import { Database } from '@/types/supabase';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

export default function AccountForm({ user, userProfile }: { user: User | null; userProfile: any | null }) {
	const supabase = createClientComponentClient<Database>();
	const [loading, setLoading] = useState(false);
	const [fullname, setFullname] = useState<string | null>(user?.user_metadata.full_name);
	const [username, setUsername] = useState<string | null>(null);
	const [college, setCollege] = useState<string | null>(user?.user_metadata.college);

	async function updateProfile({
		username,
		fullname,
		college
	}: {
		username: string | null;
		fullname: string | null;
		college: string | null;
	}) {
		try {
			setLoading(true);

			const { error } = await supabase.from('profiles').upsert({
				id: user?.id as string,
				full_name: fullname,
				username,
				updated_at: new Date().toISOString(),
				college: college
			});
			if (error) throw error;
			alert('Profile updated!');
		} catch (error: any) {
			alert(`Error updating the data...\n${error.message}`);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex flex-wrap flex-row justify-center lg:items-start items-center min-w-screen gap-16 px-8 py-24">
			<div className="flex justify-center items-center flex-col lg:w-[450px] w-full gap-4 p-12 rounded-2xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
				<h1 className="md:text-4xl text-3xl  font-bold tracking-tighter">Your Account</h1>
				<div className="w-full">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="text" value={user?.email} disabled />
				</div>
				<div className="w-full">
					<Label htmlFor="fullName">Name</Label>
					<Input
						id="fullName"
						type="text"
						value={fullname || ''}
						onChange={(e) => setFullname(e.target.value)}
					/>
				</div>
				<div className="w-full">
					<Label htmlFor="college">College Name</Label>
					<Input
						id="college"
						type="text"
						value={college || ''}
						onChange={(e) => setCollege(e.target.value)}
					/>
				</div>
				<div className="w-full">
					<Label htmlFor="username">Username</Label>
					<Input
						id="username"
						type="text"
						value={username || ''}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="w-full pt-4">
					<Button
						className="w-full"
						onClick={() => updateProfile({ fullname, username, college })}
						disabled={loading}
						variant={'default'}
					>
						{loading ? 'Loading ...' : 'Update Profile'}
					</Button>
				</div>
				<div className="w-full">
					<form action="/auth/signout" method="post">
						<Button className="w-full hover:bg-primary/10" variant={'outline'} type="submit">
							Sign Out
						</Button>
					</form>
				</div>
			</div>
			{userProfile?.articles_admin && (
				<>
					<div className="flex justify-center items-center flex-col lg:w-[450px] w-full gap-4 p-12 rounded-2xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
						<h1 className="md:text-4xl text-3xl  font-bold tracking-tighter">Admin Panel</h1>
						<Link
							href={'/dashboard'}
							className="p-4 lg:text-2xl text-xl rounded-lg border-solid border-2 border-primary hover:bg-primary/10 bg-primary/5 hover:text-secondary transition-all ease-in-out duration-300 px-12 font-semibold inline-flex flex-row-reverse gap-2 items-center justify-center"
						>
							<h1 className="flex-1 w-full text-lg">Articles Dashboard</h1>
							<MdOutlineDashboardCustomize className="w-6 h-6" />
						</Link>
					</div>
				</>
			)}
		</div>
	);
}
