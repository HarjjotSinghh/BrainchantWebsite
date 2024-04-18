import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LandingPageLottie from './landing-page-lottie';
import SearchBar from './search-bar';
import { Skeleton } from '../ui/skeleton';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'next-view-transitions';
import { BackgroundBeams } from '../ui/background-beams';
import { HeroHighlight } from '../ui/hero-hightlight';
import { LuArrowRight, LuBook, LuMonitor } from 'react-icons/lu';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import LandingPageTestimonials from './landing-page-testimonials';
import LandingPageStats from './landing-page-stats';
import LandingPageFeatures from './landing-page-features';
import LandingPageFAQ from './landing-page-faq';

export default function LandingPage() {
	return (
		<div className="flex flex-col">
			<main className="flex-1">
				<section className="h-fit lg:pt-0 mt-0 flex justify-center items-center lg:flex-row flex-col xl:gap-8 gap-4 px-0">
					<HeroHighlight className="w-full">
						<div className="w-full max-w-7xl mx-auto ">
							<div className="min-w-screen lg:px-12 sm:px-4 px-4 z-[-49] flex justify-center items-center lg:flex-row flex-col xl:gap-24 gap-4  lg:pt-0 sm:pt-0">
								<div className="flex flex-col items-start gap-2 text-left lg:w-[calc(fit-content+40px)] w-full">
									<h1 className="font-light tracking-tighter text-xl md:text-2xl lg:text-4xl">
										Acing university exams has
										<br />
										<span className="font-bold text-3xl md:text-4xl lg:text-6xl before:block before:absolute before:-inset-1 before:rounded-lg px-1 py-0.5 dark:before:bg-primary/30 before:bg-primary/10 transition-all duration-300 ease-in-out relative inline-block text-foreground before:-z-20 text-pretty">
											Never been easier
										</span>
									</h1>
									<p className="max-w-[420px] mt-2 font-light lg:text-base text-sm text-foreground/90">
										At Brainchant, you can score the best results possible in all your
										university/college exams with the help of our all-in-one platform.
									</p>
									<div className="md:max-w-md sm:max-w-sm w-full flex justify-center items-center mt-4">
										<SearchBar></SearchBar>
									</div>
									<Link href={'https://linktr.ee/BrainChant'} target="_blank" rel="noopener">
										<Button variant={'link'} className="text-accent mt-2 lg:text-lg text-sm">
											<FaWhatsapp className="lg:w-6 w-5 lg:h-6 h-5 mr-2" />
											Join Brainchant{"'"}s Official Whatsapp Group
										</Button>
									</Link>
								</div>
								<div className="hidden lg:flex justify-center items-center w-full max-w-3xl">
									{/* <LandingPageLottie /> */}
									<Image
										src={'/landing-page.svg'}
										width={500}
										height={500}
										draggable={false}
										alt="Landing Page Illustration"
										className="w-full h-auto hue-rotate-[10deg] select-none animate-float"
									/>
								</div>
							</div>
						</div>
					</HeroHighlight>
					<BackgroundBeams className="-z-50" />
				</section>
				<LandingPageFeatures />
				{/* <section className="w-full py-12 md:py-24 lg:py-32 px-4 lg:px-12 bg-foreground/[1%]">
					<div className="container px-4 md:px-6 space-y-12">
						<h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">Featured Courses</h2>
						<div className="flex flex-wrap gap-8 justify-start items-center">
							<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
								<Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
								<h3 className="text-xl font-semibold mt-4">Course 1</h3>
								<p className="text-foreground/60 max-w-[200px]">
									A short description of the course with some important details.
								</p>
								<Button
									variant={'expandIcon'}
									Icon={LuArrowRight}
									iconPlacement="right"
									className="mt-4"
								>
									Enroll Now
								</Button>
							</div>
							<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
								<Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
								<h3 className="text-xl font-semibold mt-4">Course 1</h3>
								<p className="text-foreground/60 max-w-[200px]">
									A short description of the course with some important details.
								</p>
								<Button
									variant={'expandIcon'}
									Icon={LuArrowRight}
									iconPlacement="right"
									className="mt-4"
								>
									Enroll Now
								</Button>
							</div>
							<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
								<Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
								<h3 className="text-xl font-semibold mt-4">Course 1</h3>
								<p className="text-foreground/60 max-w-[200px]">
									A short description of the course with some important details.
								</p>
								<Button
									variant={'expandIcon'}
									Icon={LuArrowRight}
									iconPlacement="right"
									className="mt-4"
								>
									Enroll Now
								</Button>
							</div>
							<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
								<Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
								<h3 className="text-xl font-semibold mt-4">Course 1</h3>
								<p className="text-foreground/60 max-w-[200px]">
									A short description of the course with some important details.
								</p>
								<Button
									variant={'expandIcon'}
									Icon={LuArrowRight}
									iconPlacement="right"
									className="mt-4"
								>
									Enroll Now
								</Button>
							</div>
							<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
								<Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
								<h3 className="text-xl font-semibold mt-4">Course 1</h3>
								<p className="text-foreground/60 max-w-[200px]">
									A short description of the course with some important details.
								</p>
								<Button
									variant={'expandIcon'}
									Icon={LuArrowRight}
									iconPlacement="right"
									className="mt-4"
								>
									Enroll Now
								</Button>
							</div>
							<div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-[270px] xl:w-[300px] p-6 rounded-xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
								<Skeleton className="w-full aspect-square rounded-xl"></Skeleton>
								<h3 className="text-xl font-semibold mt-4">Course 1</h3>
								<p className="text-foreground/60 max-w-[200px]">
									A short description of the course with some important details.
								</p>
								<Button
									variant={'expandIcon'}
									Icon={LuArrowRight}
									iconPlacement="right"
									className="mt-4"
								>
									Enroll Now
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 px-4 lg:px-12 bg-foreground/[1%]">
					<div className="container px-4 md:px-6 space-y-12">
						<StickyScroll content={content}></StickyScroll>
					</div>
				</section> */}
				<LandingPageTestimonials />
				<LandingPageStats />
				<LandingPageFAQ />
				{/* <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">Testimonials</h2>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-foreground/[2%] dark:bg-zinc-800">
                <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl">Meet Our Team</h2>
                </div>
              </section> */}
			</main>
		</div>
	);
}
