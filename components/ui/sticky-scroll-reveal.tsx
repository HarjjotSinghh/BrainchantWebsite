'use client';
import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const StickyScroll = ({
	content,
	contentClassName
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		// target: ref
		container: ref,
		offset: ['start start', 'end start']
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
			const distance = Math.abs(latest - breakpoint);
			if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
				return index;
			}
			return acc;
		}, 0);
		setActiveCard(closestBreakpointIndex);
	});

	const backgroundColors = ['hsl(var(--background))', 'hsl(var(--background))', 'hsl(var(--background))'];
	const linearGradients = [
		'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))',
		'linear-gradient(to top left, hsl(var(--primary)), hsl(var(--primary)))',
		'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--accent)))'
	];
	return (
		<motion.div
			animate={{
				backgroundColor: backgroundColors[activeCard % backgroundColors.length]
			}}
			className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-lg p-10"
			ref={ref}
		>
			<div className="div relative flex items-start px-4">
				<div className="max-w-4xl w-full">
					{content.map((item, index) => (
						<div key={item.title + index} className="my-10">
							<motion.h2
								initial={{
									opacity: 0
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3
								}}
								className="text-3xl font-bold tracking-tight text-foreground"
							>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3
								}}
								className="text-base font-light text-foreground max-w-md mt-2"
							>
								{item.description}
							</motion.p>
						</div>
					))}
				</div>
			</div>
			<motion.div
				animate={{
					background: linearGradients[activeCard % linearGradients.length]
				}}
				className={cn(
					'hidden lg:block w-full h-[24rem] rounded-md bg-background sticky top-10 overflow-hidden',
					contentClassName
				)}
			>
				{content[activeCard].content ?? null}
			</motion.div>
		</motion.div>
	);
};
