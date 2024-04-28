'use client';
import { Variants, motion } from 'framer-motion';
import { Hind_Madurai } from 'next/font/google';
import { LuBarChart2, LuBarChart4, LuBook } from 'react-icons/lu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faq = [
	{
		question: 'What is Brainchant?',
		answer: 'Brainchant is an E-Learning platform, and a one stop solution for all your academic problems in B. Tech.'
	},
	{
		question: 'How can I get the latests updates?',
		answer: 'You can join our WhatsApp group to get the latest updates, where we frequently post new features, updates, notes, and other useful information.'
	},
	{
		question: 'Who founded Brainchant?',
		answer: 'Brainchant is a student-run initiative, and it was founded by 3 anonymous students of GGSIPU university.'
	}
];

export default function LandingPageFAQ() {
	const heading = 'Frequently Asked Questions';
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

	const container_faq: Variants = {
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

	const child_faq: Variants = {
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
		<section className="text-foreground relative dark:bg-dot-white/[0.3] bg-dot-black/[0.3]" id="faq">
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
									letter.toLowerCase() === 'asked'
										? 'dark:bg-primary/20 bg-primary/10 py-3 pl-2 rounded-lg rounded-r-none'
										: ''
								} ${
									letter.toLowerCase() === 'questions'
										? 'dark:bg-primary/20 bg-primary/10 py-3 pr-2 rounded-lg rounded-l-none'
										: ''
								}`}
								key={index}
								variants={child_heading}
							>
								{letter === ' ' ? '\u00A0' : letter}
								{letter.toLowerCase() === 'questions' ? '' : '\u00A0'}
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
				<Accordion type="single" collapsible>
					<motion.div
						variants={container_faq}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '200px 0px 0px 0px' }}
						className="mt-8 w-full max-w-2xl mx-auto"
					>
						{faq.map((faq, index) => (
							<motion.div key={index} variants={child_faq} className="">
								<AccordionItem value={faq.question} key={index} className="bg-background">
									<AccordionTrigger className="lg:text-lg text-base items-center justify-between text-left hover:no-underline">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="lg:text-base text-sm">{faq.answer}</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</motion.div>
				</Accordion>
			</div>
			<div className="absolute pointer-events-none inset-0 md:bg-[radial-gradient(circle_at_50%_50%,_transparent_55%,_hsl(var(--background)/0.7))] w-full h-full"></div>
		</section>
	);
}
