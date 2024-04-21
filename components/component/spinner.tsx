import Image from 'next/image';

export default function Spinner() {
	return (
		<div className="flex justify-center items-center min-w-screen lg:px-16 py-24 pb-48 flex-col gap-8 md:px-16 px-8 relative">
			<div className="w-32 h-32 border-[12px] border-dashed rounded-full animate-spin [animation-duration:2.5s] [animation-timing-function:linear] border-primary"></div>
			<Image
				src="/logo_cropped.png"
				alt="logo"
				width={70}
				height={70}
				className="absolute dark:[filter:invert(0)] [filter:invert(1)]"
			/>
			<div className="bg-primary p-8 absolute blur-xl rounded-full -z-10 animate-pulse opacity-70 dark:block hidden"></div>
		</div>
	);
}
