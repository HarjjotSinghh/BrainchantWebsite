'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { DotsHorizontalIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
		setTheme(theme ?? 'dark');
	}, []);
	const toggleTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
		} else if (theme === 'light') {
			setTheme('dark');
		} else {
			console.log('Error: theme = ' + theme);
		}
	};
	// console.log('theme = ' + theme);
	if (!hasMounted)
		return (
			<div className="w-fit lg:scale-110">
				<Button
					className="md:px-4 md:py-7 px-4 py-6 rounded-lg lg:scale-90 bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/20 transition-all duration-300 ease-in-out-sine"
					variant={'outline'}
					onClick={toggleTheme}
					aria-label="Toggle theme"
				>
					<DotsHorizontalIcon className="md:size-7 size-4" />
				</Button>
			</div>
		);

	return (
		<div className="w-fit lg:scale-110">
			<Button
				className="md:px-3 md:py-6 px-3 py-6 rounded-lg lg:scale-90 bg-transparent border-2 border-primary/50 text-foreground hover:bg-primary/20 transition-all duration-300 ease-in-out-sine group"
				variant={'outline'}
				onClick={toggleTheme}
				aria-label="Toggle theme"
			>
				{theme === 'light' ? (
					<MoonIcon className="md:size-6 size-6  group-hover:rotate-12 transition-all duration-500 ease-in-out-sine" />
				) : (
					<SunIcon className="md:size-6 size-6 group-hover:rotate-[45deg] transition-all duration-500 ease-in-out-sine" />
				)}
			</Button>
		</div>
	);
};

export default ThemeSwitcher;
