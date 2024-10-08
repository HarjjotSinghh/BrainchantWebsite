'use client';
import { Variants, motion } from 'framer-motion';
import Counter from './counter';
import { FaGraduationCap, FaUniversity, FaWhatsapp } from 'react-icons/fa';

const stats = [
	{
		title: 'WhatsApp Community',
		number: 20000,
		icon: <FaWhatsapp className="size-12" />
	},
	{
		title: 'Students Taught',
		number: 45000,
		icon: <FaGraduationCap className="size-12" />
	},
	{
		title: 'IPU Colleges Associated',
		number: 25,
		icon: <FaUniversity className="size-12" />
	}
];

export default function LandingPageStats() {
	const heading = 'Trusted by Students';
	const letters = heading.split(' ');
	const container_: Variants = {
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
	const container: Variants = {
		hidden: {
			opacity: 0
		},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				ease: 'easeInOut'
			}
		})
	};

	const child: Variants = {
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

	const child_: Variants = {
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
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<motion.div
						className="overflow-visible text-center"
						variants={container_}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '200px 0px 0px 0px' }}
					>
						{letters.map((letter, index) => (
							<motion.span
								className={`inline-block md:text-6xl text-3xl tracking-tight font-bold ${
									letter.toLowerCase() === 'by'
										? 'dark:bg-primary/20 bg-primary/10 py-3 pl-2 rounded-lg rounded-r-none'
										: ''
								} ${
									letter.toLowerCase() === 'students'
										? 'dark:bg-primary/20 bg-primary/10 py-3 pr-2 rounded-lg rounded-l-none'
										: ''
								}`}
								key={index}
								variants={child}
							>
								{letter === ' ' ? '\u00A0' : letter}
								{letter.toLowerCase() === 'students' ? '' : '\u00A0'}
							</motion.span>
						))}
					</motion.div>
					{/* <motion.div
						className="overflow-visible text-center"
						variants={container}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '200px 0px 0px 0px' }}
					>
						<motion.p
							className="mt-4 text-foreground/80 sm:text-xl"
							variants={child_}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: '200px 0px 0px 0px' }}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
							provident impedit esse recusandae facere libero harum sequi.
						</motion.p>
					</motion.div> */}
				</div>

				<div className="mt-8 sm:mt-12">
					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-3"
						variants={container_}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '200px 0px 0px 0px' }}
					>
						{stats.map((stat, index) => (
							<motion.div
								variants={child_}
								key={index}
								className="flex flex-col rounded-lg border-border/50 border-2 hover:border-border/70 transition-all ease-in-out duration-300 px-4 py-8 text-center bg-background justify-center items-center gap-2"
							>
								{/* {stat.icon} */}
								<div className="order-last text-base font-normal text-foreground/80">{stat.title}</div>
								<div className="text-4xl font-extrabold text-foreground md:text-5xl flex flex-row items-center justify-center gap-2">
									{stat.number}+
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
			<div className="absolute pointer-events-none inset-0 md:bg-[radial-gradient(circle_at_50%_50%,_transparent_55%,_hsl(var(--background)/0.7))] w-full h-full"></div>
		</section>
	);
}
