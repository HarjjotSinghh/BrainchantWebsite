'use client';
import { useState, useEffect } from 'react';
import {
    Session,
    createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
// import { TailSpin } from 'react-loader-spinner';
import { Button } from '@/components/ui/button';
import { emitKeypressEvents } from 'readline';
import Link from 'next/link';

//TODO: can we delete this?
// import { cookies } from 'next/headers'
// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
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

export default function Subject({
    params,
    session,
}: {
    params: { subject: string };
    session: Session | null;
}) {
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
                    status,
                } = await supabase
                    .from('notes')
                    .select()
                    .eq('subject', decodeURI(params.subject));
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
        //             <div className="flex flex-wrap lg:[&_button]:flex-[0_0_calc(33%-20px)] md:[&_button]:flex-[0_0_calc(50%-20px)] [&_button]:flex-[0_0_calc(100%-20px)] lg:p-16 md:p-12 p-4 shadow-2xl rounded-3xl shadow-foreground/5 gap-8 justify-center items-center">
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
            <div className="flex min-w-screen justify-center items-center flex-col">
                {subjectData.length !== 0 && !loading ? (
                    <>
                        <div className="min-w-screen lg:px-4 flex justify-center items-center flex-col py-24">
                            <h1 className="lg:text-5xl text-3xl tracking-tighter font-bold">
                                {decodeURI(params.subject)} Notes
                            </h1>
                            <div className="mt-20 flex justify-between space-x-4 sm:space-x-8">
                                <Button
                                    className="bg-black text-white px-6 py-2 rounded-md text-xl"
                                    onClick={() => {
                                        setCurrentTab('videos');
                                    }}
                                >
                                    Videos
                                </Button>
                                <Button
                                    className="bg-black text-white px-6 py-2 rounded-md text-xl"
                                    onClick={() => {
                                        setCurrentTab('notes');
                                    }}
                                >
                                    Notes
                                </Button>
                                <Button
                                    className="bg-black text-white px-6 py-2 rounded-md text-xl"
                                    onClick={() => {
                                        setCurrentTab('pyqs');
                                    }}
                                >
                                    PYQs
                                </Button>
                            </div>

                            <div>
                                {/* <TailSpin
                                    height="40"
                                    width="40"
                                    color="purple"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperClass=""
                                    visible={loading}
                                /> */}
                                {subjectData.length === 0 && !loading && (
                                    <h1 className="lg:text-2xl text-xl tracking-tighter">
                                        Could not find the subject{' '}
                                        <b>{params.subject}</b>
                                    </h1>
                                )}
                
                                {currentTab == 'notes' && (
                                    <div className="flex flex-wrap lg:[&_button]:flex-[0_0_calc(33%-20px)] md:[&_button]:flex-[0_0_calc(50%-20px)] [&_button]:flex-[0_0_calc(100%-20px)] lg:p-16 md:p-12 p-4 shadow-2xl rounded-3xl shadow-foreground/5 gap-8 justify-center items-center">
                                        {subjectData.map((element, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-center items-center flex-col lg:p-10 p-4 rounded-md bg-primary/[10%] border-2 border-primary/[20%] hover:border-primary"
                                            >
                                                <div className="lg:text-2xl text-xl lg:pb-8 pb-4">
                                                    {element.title}
                                                </div>
                                                <iframe
                                                    src={element.link}
                                                    className="md:w-[550px] md:h-[500px] w-[330px] h-[400px]"
                                                ></iframe>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="md:text-5xl text-2xl py-24 font-semibold tracking-tighter">
                            Subject Not Found
                        </h1>
                    </>
                )}
            </div>
            )
        </>
    );
}
