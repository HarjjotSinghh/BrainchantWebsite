import { htmlSanitize } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import sanitize from 'sanitize-html';
import { LuPencilRuler, LuTags } from 'react-icons/lu';
import { LuCalendarClock } from 'react-icons/lu';

export default function ArticlePage({ article }: { article: any | null }) {
    if (!article) {
        return (
            <div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
                <h1 className="md:text-5xl text-2xl font-semibold tracking-tighter">
                    This article does not exist.
                    <br />
                    Go to the{' '}
                    <Link href={'/articles'} className="underline">
                        articles page
                    </Link>{' '}
                    to see all available articles.
                </h1>
            </div>
        );
    }
    return (
        <div className="flex justify-center items-center flex-col">
            {/* <div className="lg:min-w-screen w-full lg:h-[400px] h-auto overflow-hidden relative -z-20">
                <img
                    draggable={false}
                    className="select-none object-fill -z-10 overflow-hidden w-full h-auto opacity-100"
                    alt={article.article_title}
                    src={article.article_image_url}
                ></img>
                <div className='z-10 absolute top-[calc(50%-2rem)] lg:ml-16 ml-4 text-background [text-shadow:_1px_1px_10px_rgb(0_0_0_/_40%)]'>
                    <h1 className="md:text-5xl text-4xl font-bold tracking-tighter">
                        {article.article_title}
                    </h1>
                    <h2 className='lg:text-xl text-lg'>
                        Written by <span className='font-semibold'>{article.article_writer_name}</span>
                    </h2>
                </div>
            </div> */}
            <div className="flex min-w-screen lg:px-16 px-4 justify-start items-center flex-col py-24 pb-96">
                <div className="self-start justify-self-start">
                    <h1 className="md:text-6xl text-5xl font-bold tracking-tighter text-balance">
                        {article.article_title}
                    </h1>

                    <div className="flex flex-col gap-3 mt-8">
                        <div className="gap-2 inline-flex items-center justify-start">
                            <LuTags className="mr-1 w-6 h-6 grow-1 shrink-0" />
                            <ul className="flex flex-row flex-wrap gap-2">
                                {article.article_tags.map((tag: string) => (
                                    <Link
                                        key={tag}
                                        href={`/articles?tag=${tag}`}
                                        className='hover:[&_li]:bg-primary/10 hover:[&_li]:text-accent'
                                    >
                                        <li className="py-1 px-3 border border-accent bg-primary/5 rounded-lg transition-all duration-300 ease-in-out lg:text-base text-sm">
                                            {tag}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        <h2 className="lg:text-xl text-lg gap-2 inline-flex items-center justify-start ">
                            <LuPencilRuler className="mr-1 w-6 h-6" />
                            <div>
                                Written by{' '}
                                <span className="font-semibold">
                                    {article.article_writer_name}
                                </span>
                            </div>
                        </h2>
                        <h2 className="lg:text-xl text-lg gap-2 inline-flex items-center justify-start ">
                            <LuCalendarClock className="mr-1 w-6 h-6" />
                            <div>
                                Published on{' '}
                                <span className="font-semibold">
                                    {new Date(article.created_at).toDateString()}
                                </span>
                            </div>
                        </h2>
                    </div>
                </div>
                <hr className="w-3/5 justify-self-start self-start my-12"></hr>
                <div
                    className="prose prose-headings:text-pretty lg:prose-xl prose-purple prose-headings:tracking-tight"
                    dangerouslySetInnerHTML={{
                        __html: htmlSanitize(article.article_content),
                    }}
                ></div>
            </div>
        </div>
    );
}
