import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';
import React from 'react';
// to not let anonymous users see notes
export default async function SubjectUnprotected({ params }: { params: { subject: string } }) {
	return (
		<div className="min-w-screen lg:px-4 flex justify-center items-center flex-col py-24">
			<h1 className="lg:text-5xl text-3xl tracking-tighter font-bold">{decodeURI(params.subject)} Notes</h1>
			<div className="flex flex-wrap lg:[&_button]:flex-[0_0_calc(33%-20px)] md:[&_button]:flex-[0_0_calc(50%-20px)] [&_button]:flex-[0_0_calc(100%-20px)] lg:p-16 md:p-12 p-4 border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out gap-8 justify-center items-center">
				<div className="flex justify-center items-center  flex-col lg:p-10 p-4 rounded-md bg-primary/[4%]">
					<div className="lg:text-2xl text-xl lg:pb-8 pb-4 ">
						<h1 className="text-center z-50">
							{decodeURI(params.subject)} - All Units Notes PDF Available,{' '}
							<Link className="underline font-bold  hover:opacity-75" href={'/signin'}>
								Sign In
							</Link>{' '}
							To Access It.
						</h1>
						<div className="max-w-4xl blur-sm select-none ">
							<ul className="text-lg">
								<li className="mt-8">
									<strong>Unit 1 - 2 hours</strong>
									<br></br> Please Sign In to see the notes. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
									<br></br>
									<Link
										href="/signin"
										className="w-full flex justify-center mt-6 hover:cursor-default"
									>
										<Button variant={'secondary'} className=" select-none hover:cursor-default">
											Click Here To Access FULL PDF
										</Button>
									</Link>
								</li>
								<li className="mt-8">
									<strong>Unit 2 - 3 hours</strong>
									<br></br> Please Sign In to see the notes. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
									<br></br>
									<Link href="/signin" className="w-full flex justify-center mt-6">
										<Button variant={'secondary'} className=" select-none hover:cursor-default">
											Click Here To Access FULL PDF
										</Button>
									</Link>
								</li>
								<li className="mt-8">
									<strong>Unit 3 - 5 hours</strong>
									<br></br> Please Sign In to see the notes. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									<br></br>
									<Link href="/signin" className="w-full flex justify-center mt-6">
										<Button variant={'secondary'} className=" select-none hover:cursor-default">
											Click Here To Access FULL PDF
										</Button>
									</Link>
								</li>
								<li className="mt-8">
									<strong>Unit 4 - 4 hours</strong>
									<br></br> Please Sign In to see the notes. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
									deserunt mollit anim id est laborum.
									<br></br>
									<Link href="/signin" className="w-full flex justify-center mt-6">
										<Button variant={'secondary'} className=" select-none hover:cursor-default">
											Click Here To Access FULL PDF
										</Button>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
