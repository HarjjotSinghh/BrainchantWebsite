import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ComponentPropsWithoutRef, useEffect } from 'react';

const Counter = ({
	from,
	to,
	duration,
	...props
}: {
	from: number;
	to: number;
	duration: number;
	props?: ComponentPropsWithoutRef<'div'>;
}) => {
	const count = useMotionValue(from);
	const rounded = useTransform(count, (latest) => Math.round(latest));

	useEffect(() => {
		const controls = animate(count, to, { duration: duration, ease: 'easeInOut' });
		return controls.stop;
	}, []);

	return (
		<div
			className="py-3 px-4 bg-primary/20 rounded-lg flex flex-row flex-wrap gap-2 items-center justify-center"
			{...props}
		>
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: '200px 0px 0px 0px' }}
			>
				{rounded}
			</motion.p>
			{'+'}
		</div>
	);
};

export default Counter;
