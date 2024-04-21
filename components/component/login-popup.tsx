'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { MdLogin } from 'react-icons/md';
import Link from 'next/link';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogHeader
} from '@/components/ui/dialog';
import { useSetInterval } from '@/hooks/useSetInterval';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginPopup() {
	const [mounted, setMounted] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const supabase = createClientComponentClient();
	const [user, setUser] = useState<any>(null);
	useEffect(() => {
		const getUser = async () => {
			const { data: userData, error: userError } = await supabase.auth.getUser();
			if (userError) {
				console.error(userError);
				throw userError;
			} else {
				setUser(userData.user);
			}
		};
		getUser();
	}, [supabase]);

	useEffect(() => {
		setMounted(true);
	}, []);

	useSetInterval(
		() =>
			setShowPopup((current) => {
				return !current;
			}),
		30000
	);

	return mounted && showPopup && !user ? (
		<Dialog defaultOpen={true}>
			<DialogTrigger hidden={true}></DialogTrigger>
			<DialogContent
				className="px-4 border-2 border-primary/50 lg:rounded-2xl rounded-2xl dark:bg-background/40 dark:backdrop-blur-lg bg-background"
				onCloseAutoFocus={() => {}}
			>
				<DialogHeader>
					<DialogTitle className="text-center lg:text-3xl text-2xl font-semibold tracking-tight">
						Sign In To Continue...
					</DialogTitle>
					<DialogDescription className="flex flex-col items-center justify-center gap-2 text-base text-center dark:text-foreground/70 text-foreground/90">
						<p>
							Kindly sign in to our website to continue browsing and accessing our features and services.
						</p>
						<Link href={'/signin'} target="_blank" rel="noopener noreferrer">
							<Button
								variant={'outline'}
								className="border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine rounded-2xl flex justify-center items-center gap-1 px-6 lg:text-base text-sm py-5 w-fit text-foreground/80 capitalize focus:ring-0 focus-visible:ring-0 bg-background/90"
							>
								Sign In Now
								<MdLogin className="size-4 ml-1" />
							</Button>
						</Link>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	) : null;
}
