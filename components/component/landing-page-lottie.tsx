'use client';
import React from 'react';
import Lottie, { useLottie } from 'lottie-react';
import LandingPageLottieFile from '@/public/lottie/landing page.json';

export default function LandingPageLottie() {
	const options = {
		animationData: LandingPageLottieFile,
		className: 'xl:w-[550px] lg:w-[300px] w-full h-auto hue-rotate-[20deg] -z-10',
		loop: true
	};

	return (
		<Lottie
			animationData={LandingPageLottieFile}
			className="xl:w-[550px] lg:w-[500px] w-full h-auto hue-rotate-[15deg] -z-10"
			loop={true}
		></Lottie>
	);
}
