import { Link } from 'next-view-transitions';

const AboutUs = () => {
	return (
		<div className="min-w-screen flex justify-center items-center py-24 pb-48 flex-col gap-2 md:px-16 px-8">
			<h1 className="md:text-5xl text-4xl tracking-tight">
				About <b>Brainchant</b>
			</h1>

			<div className="max-w-4xl text-lg flex flex-col gap-4">
				<p className="text-center w-full max-w-2xl mx-auto">
					<span className="text-center text-xl">
						Brainchant is an E-Learning platform, and a one stop solution for all your academic problems.
					</span>
					<br />
				</p>
				<p>
					<h1 className="font-semibold text-2xl mb-2 capitalize">What do we provide you?</h1>
					<ul className="list-disc list-inside">
						<li>
							We provide <b>authentic notes</b> by university toppers.
						</li>

						<li>
							We provide <b>recorded lectures</b> and <b>crash courses</b>, again, by the university
							toppers.
						</li>

						<li>
							We have <b>WhatsApp groups</b> wherein you can collaborate with others to seek guidance and
							clear your doubts.
						</li>
						<li>
							We provide PYQs and important information on the daily basis.{' '}
							<Link href={'https://linktr.ee/BrainChant'} className="underline">
								<b>Click here</b>
							</Link>{' '}
							to get join them.
						</li>

						<li>
							We provide <b>one-to-one assistance</b> if needed.
						</li>
					</ul>
				</p>
				<div>
					<h1 className="font-semibold text-2xl mb-2 capitalize">Our Achievements</h1>
					Talking about our achievements, we have
					<ul className="list-disc list-inside">
						<li>
							Secured our position in <b>Top 10 Startups</b> in Shark Tank held by GGSIPU.
						</li>

						<li>
							Secured <b>1st position</b> in shark tank at BVCOE (IEEE)
						</li>

						<li>
							Secured position in <b>top 9 startups</b> among 150+ teams at BYOB held at IIT mandi
						</li>

						<li>
							We provided crash courses during the midsems, due to that many students were able to score
							really <b>good marks</b> in their examination.
						</li>
					</ul>
				</div>
				<div>
					<h1 className="font-semibold text-2xl mb-2 capitalize">Our Aim</h1>
					Our motive is to provide the best quality education. We believe in quality rather than quantity. And
					we want that support and guidance we didnt get at our time shall be provided to you at the click of
					your button.
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
