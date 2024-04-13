import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/component/footer';
// import Header, { createServerSupabaseClient } from '@/components/component/header';
import Script from 'next/script';
// import { SpeedInsights } from '@vercel/speed-insights/next';
// import { Analytics } from '@vercel/analytics/react';
import { cookies } from 'next/headers';
import { cache } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Header from '@/components/component/header';

const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Brainchant',
    description:
        "Brainchant's official website, providing useful resources and study material to all IPU students.",
    keywords:
        'notes, instagram notes ideas, instagram notes, ipu notes, btech notes ipu, ipu btech notes, btech notes, brainchant, brain chant, brainchant ipu notes',
};

export const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies();
    return createServerComponentClient({ cookies: () => cookieStore });
});

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // prettier-ignore
    const supabase = createServerSupabaseClient(); // prettier-ignore
    const {data: { session },} = await supabase.auth.getSession(); // prettier-ignore
    return (
        <html lang="en">
            <head>
                <script
                    async
                    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
                    crossOrigin="anonymous"
                ></script>
                {/* <script
                    defer
                    src="https://eu.umami.is/script.js"
                    data-website-id="ba6b3833-dad3-4e3c-a62f-85196e010689"
                ></script> */}
            </head>
            <body
                className={cn(
                    'min-h-screen antialiased bg-background text-foreground',
                    outfit.className
                )}
            >
                {/* <Header></Header> */}
                <Header session={session}></Header>
                {children}
                <Footer></Footer>
                {/* <SpeedInsights /> */}
                {/* <Analytics /> */}
                <script
                    async
                    defer
                    src="https://scripts.withcabin.com/hello.js"
                ></script>
            </body>
        </html>
    );
}
