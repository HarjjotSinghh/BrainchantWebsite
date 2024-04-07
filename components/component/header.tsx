
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';
import { cache } from 'react';

import HeaderClient from './header-client';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import BrainchantLogoPNG from '@/public/logo_cropped.png';
import { SiLinktree } from 'react-icons/si';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const createServerSupabaseClient = cache(() => {
    const cookieStore = cookies();
    return createServerComponentClient({ cookies: () => cookieStore });
});

export default async function Header() {
    const supabase = createServerSupabaseClient();
    const {
        data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
        return (
            <header className="sticky top-0 bg-background/80 backdrop-blur-xl">
                <div className="px-8 lg:px-12 h-16 py-2 flex items-center">
                    <div className="flex gap-16 items-center">
                        <Link
                            className="flex items-center justify-center"
                            href="/"
                        >
                            <Image
                                src={BrainchantLogoPNG}
                                draggable={false}
                                alt="Brainchant Logo"
                                className="w-10 h-10 invert dark:invert-0 select-none"
                            ></Image>
                        </Link>
                        <div className="hidden gap-8 lg:flex text-lg">
                            <Link
                                className=" font-medium hover:underline underline-offset-4"
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className=" font-medium hover:underline underline-offset-4"
                                href="/about-us"
                            >
                                About Us
                            </Link>
                            <Link
                                className=" font-medium hover:underline underline-offset-4"
                                href="/search"
                            >
                                Search
                            </Link>
                            <Link
                                className=" font-medium hover:text-accent transition-all duration-200 ease-in-out underline-offset-4"
                                href="https://linktr.ee/BrainChant"
                                target="_blank"
                            >
                                <SiLinktree className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    <nav className="ml-auto flex justify-center items-center gap-6 sm:gap-6">
                        <div className="flex gap-2">
                            <Link
                                className="text-sm font-medium hover:underline underline-offset-4"
                                href="/signin"
                            >
                                <Button
                                    variant={'outline'}
                                    className="hover:bg-primary px-5 bg-background/0 hover:text-background"
                                >
                                    Sign In
                                </Button>
                            </Link>
                            <Link
                                className="text-sm font-medium hover:underline underline-offset-4"
                                href="/signup"
                            >
                                <Button
                                    variant={'outline'}
                                    className="hover:bg-primary px-5 bg-background/0 hover:text-background"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
    return <HeaderClient session={session} />;
}
