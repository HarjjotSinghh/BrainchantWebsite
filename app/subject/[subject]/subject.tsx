'use client';
import { useState, useEffect } from 'react';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { LuBook, LuBookCopy, LuBookOpen, LuVideo } from 'react-icons/lu';

//TODO: can we delete this?
// export async function generateStaticParams() {
//   const supabase = createServerActionClient({cookies})
//   const {data:subjects, error} = await supabase.from('subjects').select("name")
//   if (error) {
//     console.error(error)
//     throw error
//   }
//   else {
//     return subjects.map((subject) => ({
//       "subject": subject.name,
//     }))
//   }
// }

export default function Subject({ params, user }: { params: { subject: string }; user: User | null }) {
	const supabase = createClientComponentClient();
	const [subjectData, setSubjectData] = useState<any[]>([]);
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentTab, setCurrentTab] = useState('notes');

	useEffect(() => {
		const getSubjects = async () => {
			try {
				setLoading(true);
				const {
					data: data,
					error,
					status
				} = await supabase.from('notes').select().eq('subject', decodeURI(params.subject)).eq('notes', true);
				if (error && status !== 406) {
					throw error;
				}
				if (data) {
					setSubjectData(data);
				}
			} catch (error) {
				console.error(error);
				throw error;
			} finally {
				setLoading(false);
			}
		};
		getSubjects();
	}, [supabase, params]);
	return (
		// TO LET SIGNED IN USERS VISIT
		// <>
		//   {session ? (
		//     <div className="flex min-w-screen justify-center items-center flex-col">
		//       {subjectData.length !== 0 && !loading ? (
		//         <>
		//           <div className="min-w-screen lg:px-4 flex justify-center items-center flex-col py-24">
		//             <h1 className="lg:text-5xl text-3xl tracking-tighter font-bold">
		//               {decodeURI(params.subject)} Notes
		//             </h1>
		//             <div className="flex flex-wrap lg:[&_button]:flex-[0_0_calc(33%-20px)] md:[&_button]:flex-[0_0_calc(50%-20px)] [&_button]:flex-[0_0_calc(100%-20px)] lg:p-16 md:p-12 p-4 border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out gap-8 justify-center items-center">
		//               <TailSpin
		//                 height="40"
		//                 width="40"
		//                 color="purple"
		//                 ariaLabel="tail-spin-loading"
		//                 radius="1"
		//                 wrapperClass=""
		//                 visible={loading}
		//               />
		//               {subjectData.length === 0 && !loading && (
		//                 <h1 className="lg:text-2xl text-xl tracking-tighter">
		//                   Could not find the subject <b>{params.subject}</b>
		//                 </h1>
		//               )}
		//               {subjectData.map((element, index) => (
		//                 <div
		//                   key={index}
		//                   className="flex justify-center items-center flex-col lg:p-10 p-4 rounded-md bg-primary/[4%]"
		//                 >
		//                   <div className="lg:text-2xl text-xl lg:pb-8 pb-4">
		//                     {element.title}
		//                   </div>
		//                   <iframe
		//                     src={element.link}
		//                     className="md:w-[550px] md:h-[500px] w-[330px] h-[400px]"
		//                     allow="autoplay"
		//                   ></iframe>
		//                 </div>
		//               ))}
		//             </div>
		//           </div>
		//         </>
		//       ) : (
		//         <>
		//           <h1 className="md:text-5xl text-2xl py-24 font-semibold tracking-tighter">
		//             Subject Not Found
		//           </h1>
		//         </>
		//       )}
		//     </div>
		//   ) : (
		//     <div className='flex min-w-screen justify-center items-center flex-col py-24 pb-96'>
		//         <h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
		//         Please <Link href={'/signin'} className="underline">Sign In</Link> to see notes.
		//         </h1>
		//     </div>
		//   )}
		// </>

		// TO LET EVERYONE VISIT
		<>
			<div className="flex w-full mx-auto max-w-screen-2xl justify-center items-center flex-col">
				{subjectData.length !== 0 && !loading ? (
					<>
						<div className="min-w-screen lg:px-4 flex gap-8 justify-center items-center flex-col py-24">
							<h1 className="lg:text-5xl text-3xl tracking-tighter font-bold capitalize px-4">
								{decodeURI(params.subject)} Notes
							</h1>

							<div>
								{subjectData.length === 0 && !loading && (
									<h1 className="lg:text-2xl text-xl tracking-tighter">
										Could not find the subject <b>{params.subject}</b>
									</h1>
								)}

								{
									<div className="flex flex-col lg:p-12 md:p-6 p-4 md:border-border/50 md:border-2 md:hover:border-border/70 transition-all duration-300 ease-in-out gap-8 justify-center items-center rounded-lg">
										<div className="flex w-full flex-1 flex-row flex-wrap justify-between gap-4 mb-4">
											<Button
												variant={'expandIcon'}
												Icon={LuVideo}
												iconPlacement="left"
												className={`${
													currentTab === 'videos'
														? 'bg-primary/90 border-border/50 border-2'
														: 'dark:bg-primary/10 bg-primary/60 border-border/50 border-2'
												} px-8 lg:w-[calc(33%-20px)] md:w-[calc(50%-20px)] w-full py-6 rounded-lg text-xl gap-2 dark:text-foreground text-background`}
												onClick={() => {
													setCurrentTab('videos');
												}}
											>
												Videos
											</Button>
											<Button
												variant={'expandIcon'}
												Icon={LuBook}
												iconPlacement="left"
												className={`${
													currentTab === 'notes'
														? 'bg-primary/90 border-border/50 border-2'
														: 'dark:bg-primary/10 bg-primary/60 border-border/50 border-2'
												} px-8 lg:w-[calc(33%-20px)] md:w-[calc(50%-20px)] w-full py-6 rounded-lg text-xl gap-2 dark:text-foreground text-background`}
												onClick={() => {
													setCurrentTab('notes');
												}}
											>
												Notes
											</Button>
											<Button
												variant={'expandIcon'}
												Icon={LuBookOpen}
												iconPlacement="left"
												className={`${
													currentTab === 'pyqs'
														? 'bg-primary/90 border-border/50 border-2'
														: 'dark:bg-primary/10 bg-primary/60 border-border/50 border-2'
												} px-8 lg:w-[calc(33%-20px)] md:w-[calc(50%-20px)] w-full py-6 rounded-lg text-xl gap-2 dark:text-foreground text-background`}
												onClick={() => {
													setCurrentTab('pyqs');
												}}
											>
												PYQs
											</Button>
										</div>
										<div className="flex flex-row flex-wrap lg:[&_button]:flex-[0_0_calc(33%-200px)] md:[&_button]:flex-[0_0_calc(50%-200px)] [&_button]:flex-[0_0_calc(100%-200px)] p-0 gap-8 justify-center items-center rounded-lg">
											{currentTab === 'notes' &&
												subjectData.map((element, index) => (
													<div
														key={index}
														className="flex justify-center items-center flex-col lg:p-10 p-0 rounded-md bg-primary/[5%] border-2 border-primary/[20%] hover:border-primary transition-all duration-300 ease-in-out w-full lg:w-fit "
													>
														<div className="lg:text-2xl text-xl py-4 lg:pt-0">
															{element.title}
														</div>
														<iframe
															src={element.link}
															className="md:w-[550px] md:h-[500px] w-full h-[400px]"
														></iframe>
													</div>
												))}

											{currentTab === 'videos' &&
												subjectData.map(
													(element, index) =>
														element.videos && (
															<div
																key={index}
																className="flex justify-center items-center flex-col lg:p-10 p-8 rounded-md bg-primary/[5%] border-2 border-primary/[20%] hover:border-primary transition-all duration-300 ease-in-out w-full gap-8"
															>
																{element.videos.map((e: any, i: number) => (
																	<div key={i}>
																		<iframe
																			src={e}
																			className="lg:w-[650px] lg:h-full w-full h-full aspect-video"
																		></iframe>
																	</div>
																))}

																{/* {JSON.stringify(element)} */}
															</div>
														)
												)}
										</div>
									</div>
								}
							</div>
						</div>
					</>
				) : (
					<>
						{subjectData.length === 0 && !loading && (
							<h1 className="lg:text-2xl text-xl tracking-tighter py-24">
								Could not find the subject{' '}
								<b>
									{'"'}
									{decodeURI(params.subject)}
									{'"'}
								</b>
							</h1>
						)}
						{loading && <h1 className="lg:text-2xl text-xl tracking-tighter py-24">Loading...</h1>}
					</>
				)}
			</div>
		</>
	);
}
