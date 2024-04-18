'use client';
import React from 'react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import BrainchantLogoPNG from '@/public/logo_cropped.png';
import { Button } from '@/components/ui/button';
import type { User } from '@supabase/supabase-js';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { RiHome3Line, RiSettings4Line, RiStickyNoteLine, RiUserLine } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';
import ThemeSwitcher from './theme-switcher';
import { LuLogIn } from 'react-icons/lu';

export default function Header({ user }: { user: User | null }) {
	return (
		<header className="sticky top-0 bg-background/90 backdrop-blur-md border-b border-border/50 z-50">
			<div className="px-4 lg:px-12 h-24 py-4 flex items-center mx-auto max-w-7xl">
				<div className="flex gap-16 items-center">
					<Link
						className="flex items-center justify-center p-2 md:pr-4 pr-2 rounded-lg border-2 border-border/50 hover:border-border/70 transition-all duration-300 ease-in-out"
						href="/"
					>
						<Image
							src={BrainchantLogoPNG}
							draggable={false}
							alt="Brainchant Logo"
							className="w-10 h-10 invert dark:invert-0 select-none"
						/>
						<h1 className="text-2xl tracking-tighter font-bold md:block hidden">Brainchant</h1>
					</Link>
					<div className="hidden gap-8 lg:flex text-lg">
						<Link className=" font-medium hover:underline underline-offset-4" href="/">
							<Button variant={'linkHover2'} className="px-0 text-base">
								Home
							</Button>
						</Link>
						<Link className=" font-medium hover:underline underline-offset-4" href="/about-us">
							<Button variant={'linkHover2'} className="px-0 text-base">
								About Us
							</Button>
						</Link>
						<Link className=" font-medium hover:underline underline-offset-4" href="/search">
							<Button variant={'linkHover2'} className="px-0 text-base">
								Notes
							</Button>
						</Link>
						{/* <Link
							className=" font-medium hover:text-accent transition-all duration-200 ease-in-out underline-offset-4"
							href="https://linktr.ee/BrainChant"
							target="_blank"
						>
							<SiLinktree className="w-6 h-6" />
						</Link> */}
					</div>
				</div>

				<nav className="ml-auto flex justify-center items-center gap-6 sm:gap-6">
					{user ? (
						<div className="flex flex-row flex-wrap gap-2">
							{/* <Button
                                    variant={'link'}
                                    className="text-foreground hover:underline underline-offset-4"
                                >
                                    {user?.user_metadata.full_name}
                                </Button> */}

							<ThemeSwitcher />
							<DropdownMenu modal={false}>
								<DropdownMenuTrigger className="rounded-lg border-2 border-border/50 hover:border-border/70 focus-visible:outline-none focus-visible:ring-0 transition-all duration-300 ease-in-out">
									<Avatar className="select-none rounded-lg">
										<AvatarImage
											draggable="false"
											src={user?.user_metadata.avatar_url}
											alt={user?.user_metadata.full_name}
										/>
										<AvatarFallback className="text-lg font-semibold tracking-tight">
											{user?.user_metadata.full_name
												.split(' ')
												.map((word: string) => word[0].toUpperCase())
												.join('')}
										</AvatarFallback>
									</Avatar>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56 md:mr-[60px] mr-5 mt-2 bg-background/90 backdrop-blur-sm">
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
									<DropdownMenuItem className="flex items-center gap-1 text-base hover:cursor-pointer text-foreground hover:text-background group">
										<MdOutlineLogout className="w-5 h-5" />
										<form action="/auth/signout" method="post">
											<Button
												variant={'default'}
												className="w-full bg-transparent text-base text-foreground  p-0 mt-0 pt-0 hover:bg-transparent font-normal h-fit group-hover:text-background dark:group-hover:text-foreground"
												type="submit"
											>
												Sign Out
											</Button>
										</form>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					) : (
						<div className="flex gap-2">
							<Link className="text-lg font-medium hover:underline underline-offset-4" href="/signin">
								<Button
									variant={'expandIcon'}
									Icon={LuLogIn}
									iconPlacement="right"
									className="gap-0 [&_svg]:hover:ml-0 py-6 rounded-lg border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out bg-transparent text-foreground px-6 hover:bg-primary/10 text-sm font-medium tracking-tight"
								>
									Login
								</Button>
							</Link>
							<ThemeSwitcher />
						</div>
					)}
				</nav>
			</div>
		</header>
	);
}
