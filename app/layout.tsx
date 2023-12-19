import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils';
import Footer from '@/components/component/footer';
import Header from '@/components/component/header';

const outfit = Outfit({variable: "--font-outfit", subsets:["latin"]});

export const metadata: Metadata = {
  title: 'Brainchant',
  description: 'Brainchant\'s official website, providing useful resources and study material to all IPU students.',
  keywords: "notes, instagram notes ideas, instagram notes, ipu notes, btech notes ipu, ipu btech notes, btech notes, brainchant, brain chant, brainchant ipu notes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen antialiased bg-background text-foreground",
          outfit.className
        )}>
          <Header></Header>
            {children}
          <Footer></Footer>
      </body>
    </html>
  )
}
