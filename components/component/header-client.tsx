'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BrainchantLogoPNG from '@/public/logo_cropped.png';
import { Button } from '@/components/ui/button';
import type { Session } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SiLinktree } from 'react-icons/si';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaUser } from 'react-icons/fa';
import {
    RiArticleLine,
    RiHome3Line,
    RiSettings4Line,
    RiStickyNoteLine,
    RiUser3Line,
    RiUserLine,
} from 'react-icons/ri';

export default function HeaderClient({ session }: { session: Session | null }) {
    const user = session?.user;
    return (
        <header className="sticky top-0 bg-background/80 backdrop-blur-xl">
            <div className="px-8 lg:px-12 h-16 py-2 flex items-center justify-between">
                <div className="flex gap-16 items-center">
                    <Link className="flex items-center justify-center" href="/">
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

                        <Link
                            className="font-medium hover:text-accent transition-all duration-200 ease-in-out underline-offset-4"
                            href="https://bit.ly/BXN8"
                            target="_blank"
                            style={{
                                background:
                                    '-webkit-linear-gradient(45deg, red, blue)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Join our FREE Blockchain Cohort in Solana!
                        </Link>
                    </div>
                </div>

                <nav className="ml-auto flex justify-center items-center gap-6 sm:gap-6">
                    {user ? (
                        <div className="flex">
                            {/* <Button
                                    variant={'link'}
                                    className="text-foreground hover:underline underline-offset-4"
                                >
                                    {user?.user_metadata.full_name}
                                </Button> */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="rounded-full border-2 border-primary">
                                    <Avatar className="select-none">
                                        <AvatarImage
                                            draggable="false"
                                            src={user?.user_metadata.avatar_url}
                                            alt={user?.user_metadata.full_name}
                                        />
                                        <AvatarFallback>
                                            {user?.user_metadata.full_name
                                                .split(' ')
                                                .map((word: string) =>
                                                    word[0].toUpperCase()
                                                )
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="">
                                    <DropdownMenuLabel className="flex items-center gap-1 text-base">
                                        <RiUserLine className="w-5 h-5" />
                                        {user?.user_metadata.full_name}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <Link href={'/'}>
                                        <DropdownMenuItem className="flex items-center gap-1 text-base hover:cursor-pointer">
                                            <RiHome3Line className="w-5 h-5" />
                                            Home
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href={'/search'}>
                                        <DropdownMenuItem className="flex items-center gap-1 text-base hover:cursor-pointer">
                                            <RiStickyNoteLine className="w-5 h-5" />
                                            Notes
                                        </DropdownMenuItem>
                                    </Link>
                                    {/* <Link href={"/articles"}>
                                      <DropdownMenuItem className="flex items-center gap-1 text-base hover:cursor-pointer">
                                          <RiArticleLine className="w-5 h-5" />
                                          Articles
                                      </DropdownMenuItem>
                                    </Link> */}

                                    <Link href={'/account'}>
                                        <DropdownMenuItem className="flex items-center gap-1 text-base hover:cursor-pointer">
                                            <RiSettings4Line className="w-5 h-5" />
                                            Settings
                                        </DropdownMenuItem>
                                    </Link>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    ) : (
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
                    )}
                </nav>
            </div>
        </header>
    );
}
