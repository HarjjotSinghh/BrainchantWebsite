'use client';
import { Variants, motion } from 'framer-motion';
import { MdGroups } from 'react-icons/md';
import { FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';

const features = [
	{
		title: 'Interactive Learning',
		description:
			'Emphasize that your courses are crafted by industry experts to ensure high-quality, up-to-date content.',
		icon: <FaBookOpen className="size-12" />
	},
	{
		title: 'Expert Teachers',
		description:
			'Our teachers are experts who are passionate about their field and dedicated to providing quality education.',
		icon: <FaChalkboardTeacher className="size-12" />
	},
	{
		title: 'Strong and Helpful Community',
		description:
			'Our community is made up of students and teachers who are passionate about their field and dedicated to providing quality education.',
		icon: <MdGroups className="size-12" />
	}
	// {
	// 	title: 'Digital campaigns',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
	// 	icon: <LuBarChart4 className="size-12" />
	// },
	// {
	// 	title: 'Digital campaigns',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
	// 	icon: <LuBarChart4 className="size-12" />
	// },
	// {
	// 	title: 'Digital campaigns',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.',
	// 	icon: <LuBarChart4 className="size-12" />
	// }
];

export default function LandingPageFeatures() {
	const heading = 'Features that Stand Out';
	const letters = heading.split(' ');
	const container_heading: Variants = {
		hidden: {
			opacity: 0
		},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3 * i
			}
		})
	};

	const child_heading: Variants = {
		hidden: {
			opacity: 0,
			y: 20,
			rotate: 2,
			scale: 0.95,
			transition: {
				type: 'easeInOut',
				stiffness: 20,
				damping: 12
			}
		},
		visible: {
			opacity: 1,
			y: 0,
			rotate: 0,
			scale: 1,
			transition: {
				type: 'easeInOut',
				stiffness: 20,
				damping: 12
			}
		}
	};

	const container_features: Variants = {
		hidden: {
			opacity: 0
		},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 0.3 * i
			}
		})
	};

	const child_features: Variants = {
		hidden: {
			opacity: 0,
			y: 40,
			transition: {
				type: 'easeInOut',
				stiffness: 20,
				damping: 12
			}
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'easeInOut',
				stiffness: 20,
				damping: 12
			}
		}
	};
	return (
		<section className="text-foreground relative dark:bg-dot-white/[0.3] bg-dot-black/[0.3]">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-7xl text-center">
					<motion.div
						className="overflow-visible text-center"
						variants={container_heading}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '200px 0px 0px 0px' }}
					>
						{letters.map((letter, index) => (
							<motion.span
								className={`inline-block md:text-6xl text-3xl tracking-tight font-bold ${
									letter.toLowerCase() === 'stand'
										? 'dark:bg-primary/20 bg-primary/10 py-3 pl-2 rounded-lg rounded-r-none'
										: ''
								} ${
									letter.toLowerCase() === 'out'
										? 'dark:bg-primary/20 bg-primary/10 py-3 pr-2 rounded-lg rounded-l-none'
										: ''
								}`}
								key={index}
								variants={child_heading}
							>
								{letter === ' ' ? '\u00A0' : letter}
								{letter.toLowerCase() === 'out' ? '' : '\u00A0'}
							</motion.span>
						))}
					</motion.div>
					{/* <motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '200px 0px 0px 0px' }}
						variants={{
							hidden: {
								opacity: 0
							},
							visible: {
								opacity: 1,
								transition: {
									type: 'easeInOut',
									stiffness: 20,
									damping: 12,
									.1
								}
							}
						}}
						className="mt-4 text-foreground/80 max-w-2xl text-center mx-auto lg:text-lg text-base"
					>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
						nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
					</motion.p> */}
				</div>

				<motion.div
					variants={container_features}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '200px 0px 0px 0px' }}
					className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
				>
					{features.map((feature, index) => (
						<motion.a
							key={index}
							variants={child_features}
							className="flex flex-col bg-background justify-center items-center rounded-xl border-2 border-border/50 p-8 transition-all duration-300 ease-in-out hover:border-border/70"
						>
							{feature.icon}
							<h2 className="mt-4 text-xl font-bold text-foreground text-center text-balance">
								{feature.title}
							</h2>
							<p className="mt-1 text-sm text-foreground/80 text-center">{feature.description}</p>
						</motion.a>
					))}
				</motion.div>
			</div>
			<div className="absolute pointer-events-none inset-0 md:bg-[radial-gradient(circle_at_50%_50%,_transparent_55%,_hsl(var(--background)/0.7))] w-full h-full"></div>
		</section>
	);
}
