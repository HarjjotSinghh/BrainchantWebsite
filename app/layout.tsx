import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/component/footer';
import Header from '@/components/component/header';
import supabaseServer from '@/utils/supabase/supabaseServer';

const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Brainchant',
	description: "Brainchant's official website, providing useful resources and study material to all IPU students.",
	keywords:
		'notes, instagram notes ideas, instagram notes, ipu notes, btech notes ipu, ipu btech notes, btech notes, brainchant, brain chant, brainchant ipu notes'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const supabase = supabaseServer();
	const {
		data: { user }
	} = await supabase.auth.getUser();
	return (
		<html lang="en">
			<head>
				<script
					async
					src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
					crossOrigin="anonymous"
				></script>
			</head>
			<body className={cn('min-h-screen antialiased bg-background text-foreground', outfit.className)}>
				<Header user={user}></Header>
				{children}
				<Footer></Footer>
				<script async defer src="https://scripts.withcabin.com/hello.js"></script>
			</body>
		</html>
	);
}
