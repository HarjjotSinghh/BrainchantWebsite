import React from 'react';
import { Link } from 'next-view-transitions';
import { Button } from '../ui/button';
import Image from 'next/image';
import { FaYoutube, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiLinktree } from 'react-icons/si';

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center gap-2 py-8 w-full shrink-0 border-t border-border/50">
			<div className="w-full lg:px-0 px-8 flex flex-col gap-12">
				<div className="flex justify-center items-start lg:flex-row flex-col lg:gap-16 gap-8">
					<div className="flex justify-center items-center flex-row">
						{/* <p className="text-xl font-bold">
              Brainchant
            </p> */}
					</div>

					<div className="flex flex-row gap-4">
						<Image
							alt="Brainchant Logo"
							src="/logo_cropped.png"
							width={50}
							height={50}
							className="invert dark:invert-0 "
						/>
						<div>
							<h2 className="font-bold text-xl mb-0">Contact Information</h2>
							{/* <p className="mb-2">New Delhi, India</p> */}
							<p className="">
								{/* <span className='font-bold'>Email:</span>  */}
								<Link href={'mailto:info@brainchant.in'} className="select-all cursor">
									info@brainchant.in
								</Link>
							</p>
						</div>
					</div>

					<div>
						<h3 className="font-bold text-xl mb-2">Get Started</h3>
						<ul className="space-y-2 font-extralight">
							<li>
								<Link className="block text-foreground/90" href="/search">
									<Button variant={'linkHover2'} className="px-0 text-base py-0 h-10">
										Search
									</Button>
								</Link>
							</li>
							<li>
								<Link className="block text-foreground/90" href="/signin">
									<Button variant={'linkHover2'} className="px-0 text-base py-0 h-10">
										Sign In
									</Button>
								</Link>
							</li>
							<li>
								<Link className="block text-foreground/90" href="/signup">
									<Button variant={'linkHover2'} className="px-0 text-base py-0 h-10">
										Sign Up
									</Button>
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold text-xl mb-2">Legal</h3>
						<ul className="space-y-2 font-extralight">
							<li>
								<Link className="block text-foreground/90" href="/about-us">
									<Button variant={'linkHover2'} className="px-0 text-base py-0 h-10">
										About Us
									</Button>
								</Link>
							</li>
							<li>
								<Link className="block text-foreground/90" href="/privacy-policy">
									<Button variant={'linkHover2'} className="px-0 text-base py-0 h-10">
										Privacy Policy
									</Button>
								</Link>
							</li>
							<li>
								<Link className="block text-foreground/90" href="/copyright">
									<Button variant={'linkHover2'} className="px-0 text-base py-0 h-10">
										Copyright Info
									</Button>
								</Link>
							</li>
						</ul>
					</div>
					{/* <div>
            <h3 className="font-bold text-lg mb-2">Column Two</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="block text-foreground hover:text-primary/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Six
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-primary/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Seven
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-primary/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Eight
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-primary/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Nine
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-primary/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Ten
                </Link>
              </li>
            </ul>
          </div> */}
					<div>
						<h3 className="font-bold text-xl mb-2">Follow us</h3>
						<ul className="gap-4 flex justify-center items-center [&_li]:scale-105">
							<Link
								aria-label="Brainchant Linktree"
								target="_blank"
								rel={'norefferer'}
								href="https://linktr.ee/BrainChant"
							>
								<li className="flex items-center space-x-2">
									<SiLinktree className="text-foreground/90 w-6 h-6 hover:text-primary/90 transition-all ease-in-out duration-200" />
								</li>
							</Link>
							<Link
								aria-label="Brainchant Instagram"
								target="_blank"
								rel={'norefferer'}
								href="https://www.instagram.com/brainchant.in/"
							>
								<li className="flex items-center space-x-2">
									<GrInstagram className="text-foreground/90 w-6 h-6 hover:text-primary/90 transition-all ease-in-out duration-200" />
								</li>
							</Link>
							<Link
								aria-label="Brainchant Twitter"
								target="_blank"
								rel={'norefferer'}
								href="https://www.x.com/"
							>
								<li className="flex items-center space-x-2">
									<FaXTwitter className="text-foreground/90 w-6 h-6 hover:text-primary/90 transition-all ease-in-out duration-200" />
								</li>
							</Link>
							<Link
								aria-label="Brainchant LinkedIn"
								target="_blank"
								rel={'norefferer'}
								href="https://www.linkedin.com/company/brainchantofficial/"
							>
								<li className="flex items-center space-x-2">
									<FaLinkedin className="text-foreground/90 w-6 h-6 hover:text-primary/90 transition-all ease-in-out duration-200" />
								</li>
							</Link>
							<Link
								aria-label="Brainchant Youtube"
								target="_blank"
								rel={'norefferer'}
								href="https://www.youtube.com/channel/UCEljKeBT4nQiJZeNX4C3ljA"
							>
								<li className="flex items-center space-x-2">
									<FaYoutube className="text-foreground/90 w-6 h-6 hover:text-primary/90 transition-all ease-in-out duration-200" />
								</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className="text-sm text-foreground/80 flex flex-col items-center gap-2 justify-center">
					<span>© {new Date().getFullYear().toString()} Brainchant. All rights reserved.</span>
					{/*<span className='text-xs text-center'>Developed with 💜 by <Link href={"https://solo.to/harjjot"} className='underline hover:text-primary/90 transition-all ease-in-out duration-200' target='_blank' rel="noopener">@HarjjotSinghh</Link></span>*/}
					{/* <div className="flex space-x-4">
            <Link className="hover:text-gray-800" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-gray-800" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-gray-800" href="#">
              Cookies Settings
            </Link>
          </div> */}
				</div>
			</div>
		</footer>
	);
}
