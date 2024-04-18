import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/component/footer';
import Header from '@/components/component/header';
import supabaseServer from '@/utils/supabase/supabaseServer';
import { ThemeProvider } from 'next-themes';
import { ViewTransitions } from 'next-view-transitions';
import FooterNew from '@/components/component/footer-new';
import { BackgroundBeams } from '@/components/ui/background-beams';

const outfit = Lexend({
	variable: '--font-outfit',
	subsets: ['latin'],
	// weight: ['400', '500', '600', '700', '800'],
	// weight: ['400', '700'],
	weight: 'variable',
	display: 'swap'
});

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
		<ViewTransitions>
			<html lang="en">
				<head>
					<script
						async
						src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
						crossOrigin="anonymous"
					></script>
				</head>
				<body
					className={cn(
						'min-h-full antialiased bg-background text-foreground border-border',
						outfit.className
					)}
				>
					<ThemeProvider
						attribute="class"
						themes={['dark', 'light']}
						defaultTheme="dark"
						// enableSystem={true}
						// disableTransitionOnChange
					>
						<Header user={user} />
						<main>{children}</main>
						{/* <Footer></Footer> */}
						<FooterNew />
						<script async defer src="https://scripts.withcabin.com/hello.js"></script>
					</ThemeProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}
