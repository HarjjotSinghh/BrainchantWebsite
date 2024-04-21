'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { MdWhatsapp } from 'react-icons/md';
import Link from 'next/link';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
	DialogHeader
} from '@/components/ui/dialog';

export default function WelcomePopup() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	return mounted ? (
		<Dialog defaultOpen={true}>
			<DialogTrigger hidden={true}></DialogTrigger>
			<DialogContent
				className="px-4 border-2 border-primary/50 lg:rounded-2xl rounded-2xl dark:bg-background/40 dark:backdrop-blur-lg bg-background"
				onCloseAutoFocus={() => {}}
			>
				<DialogHeader>
					<DialogTitle className="text-center lg:text-3xl text-2xl font-semibold tracking-tight">
						Welcome to Brainchant!
					</DialogTitle>
					<DialogDescription className="flex flex-col items-center justify-center gap-2 text-base text-center dark:text-foreground/70 text-foreground/90">
						<p>
							Join our official WhatsApp group to get the latest updates and get notified about upcoming
							events and features.
						</p>
						<Link href={'https://linktr.ee/BrainChant'} target="_blank" rel="noopener noreferrer">
							<Button
								variant={'outline'}
								className="border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300 ease-in-out-sine rounded-2xl flex justify-center items-center gap-1 px-6 lg:text-base text-sm py-5 w-fit text-foreground/80 capitalize focus:ring-0 focus-visible:ring-0 bg-background/90"
							>
								<MdWhatsapp className="size-6" />
								Join WhatsApp Group
							</Button>
						</Link>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	) : null;
}
