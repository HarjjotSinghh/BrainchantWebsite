import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiLinktree } from 'react-icons/si';
import { Button } from '../ui/button';

export default function FooterNew() {
	return (
		<footer className="bg-transparent border-t-2 border-border/50">
			<div className="mx-auto max-w-7xl px-4 lg:px-12 py-16">
				<div className="flex flex-col items-center gap-4 rounded-lg border-2 border-border/50 bg-background p-6 sm:flex-row sm:justify-between">
					<strong className="text-xl md:text-left text-center text-foreground sm:text-xl tracking-tight">
						{' '}
						Start acing your university exams!{' '}
					</strong>

					<Button className="inline-flex items-center gap-2 rounded-lg border-2 border-border/50 bg-background px-8 py-3 text-foreground hover:bg-primary/10 transition-all duration-300 ease-in-out hover:text-foreground focus:outline-none">
						<span className="text-sm font-medium tracking-tight">Login </span>

						<svg
							className="size-5 rtl:rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Button>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="text-center sm:text-left">
						<p className="text-xl tracking-tight font-medium text-foreground">About Us</p>

						<ul className="mt-4 text-sm">
							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									Company History
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Meet the Team{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									Employee Handbook
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Careers{' '}
								</Button>
							</li>
						</ul>
					</div>

					<div className="text-center sm:text-left">
						<p className="text-xl tracking-tight font-medium text-foreground">Our Services</p>

						<ul className="mt-4 text-sm">
							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									Web Development
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Web Design{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Marketing{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Google Ads{' '}
								</Button>
							</li>
						</ul>
					</div>

					<div className="text-center sm:text-left">
						<p className="text-xl tracking-tight font-medium text-foreground">Resources</p>

						<ul className="mt-4 text-sm">
							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Online Guides{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									Conference Notes
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Forum{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Downloads{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									Upcoming Events
								</Button>
							</li>
						</ul>
					</div>

					<div className="text-center sm:text-left">
						<p className="text-xl tracking-tight font-medium text-foreground">Helpful Links</p>

						<ul className="mt-4 text-sm">
							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									FAQs{' '}
								</Button>
							</li>

							<li>
								<Button
									className="text-foreground transition-all duration-300 ease-in-out px-0 py-0 leading-[0]"
									variant={'linkHover2'}
								>
									{' '}
									Support{' '}
								</Button>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-16">
					<div className="mt-16 sm:flex sm:items-start sm:justify-between">
						<div className="flex sm:flex-row flex-col md:items-center items-center gap-2 md:gap-4">
							<Link
								className="flex items-center justify-center p-2 md:pr-4 pr-2 rounded-lg border-2 border-border/50 hover:border-border/70 transition-all duration-300 ease-in-out"
								href="/"
							>
								<Image
									src={'/logo_cropped.png'}
									draggable={false}
									width={50}
									height={50}
									alt="Brainchant Logo"
									className="w-10 h-10 invert dark:invert-0 select-none"
								/>
								<h1 className="text-2xl tracking-tighter font-bold">Brainchant</h1>
							</Link>
							<div className="">
								<h2 className="font-medium tracking-tight text-lg mb-0 md:text-left text-center">
									Contact us at
								</h2>
								{/* <p className="mb-2">New Delhi, India</p> */}
								<p className=" text-sm md:text-left text-center">
									{/* <span className='font-bold'>Email:</span>  */}
									<Link href={'mailto:info@brainchant.in'} className="select-all cursor">
										info@brainchant.in
									</Link>
								</p>
							</div>
						</div>

						<div className="flex gap-8 flex-col sm:mt-0 mt-16">
							<ul className="gap-4 flex justify-center items-center [&_li]:scale-105">
								<Link
									aria-label="Brainchant Linktree"
									target="_blank"
									rel={'norefferer'}
									href="https://linktr.ee/BrainChant"
								>
									<li className="flex items-center space-x-2">
										<SiLinktree className=" p-2 border-border/50 rounded-sm border-2 text-foreground/90 size-10 hover:bg-primary/10 hover:border-border/70 transition-all ease-in-out duration-200" />
									</li>
								</Link>
								<Link
									aria-label="Brainchant Instagram"
									target="_blank"
									rel={'norefferer'}
									href="https://www.instagram.com/brainchant.in/"
								>
									<li className="flex items-center space-x-2">
										<GrInstagram className=" p-2 border-border/50 rounded-sm border-2 text-foreground/90 size-10 hover:bg-primary/10 hover:border-border/70 transition-all ease-in-out duration-200" />
									</li>
								</Link>
								<Link
									aria-label="Brainchant Twitter"
									target="_blank"
									rel={'norefferer'}
									href="https://www.x.com/"
								>
									<li className="flex items-center space-x-2">
										<FaXTwitter className=" p-2 border-border/50 rounded-sm border-2 text-foreground/90 size-10 hover:bg-primary/10 hover:border-border/70 transition-all ease-in-out duration-200" />
									</li>
								</Link>
								<Link
									aria-label="Brainchant LinkedIn"
									target="_blank"
									rel={'norefferer'}
									href="https://www.linkedin.com/company/brainchantofficial/"
								>
									<li className="flex items-center space-x-2">
										<FaLinkedin className=" p-2 border-border/50 rounded-sm border-2 text-foreground/90 size-10 hover:bg-primary/10 hover:border-border/70 transition-all ease-in-out duration-200" />
									</li>
								</Link>
								<Link
									aria-label="Brainchant Youtube"
									target="_blank"
									rel={'norefferer'}
									href="https://www.youtube.com/channel/UCEljKeBT4nQiJZeNX4C3ljA"
								>
									<li className="flex items-center space-x-2">
										<FaYoutube className=" p-2 border-border/50 rounded-sm border-2 text-foreground/90 size-10 hover:bg-primary/10 hover:border-border/70 transition-all ease-in-out duration-200" />
									</li>
								</Link>
							</ul>
						</div>
					</div>
					<div className="mt-16">
						<p className="text-center text-sm text-foreground sm:mt-0 sm:text-center">
							Copyright &copy; {new Date().getFullYear()} Brainchant. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
