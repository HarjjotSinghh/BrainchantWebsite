'use client';

import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { useRouter } from 'next/navigation';
import sanitizeHtml from 'sanitize-html';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiDeleteBin2Line, RiPencilLine } from 'react-icons/ri';
import {
  CiLocationOn,
  CiMoneyBill,
  CiCalendarDate,
  CiUser,
} from 'react-icons/ci';
import { IoIosAddCircleOutline, IoIosPerson } from 'react-icons/io';
import Link from 'next/link';
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';

function MainDashboardPage({
  userProfile,
  articles,
}: {
  userProfile: any;
  articles: any[];
}) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  async function handleArticleDeletion(e: any) {
    try {
      setLoading(true);
      const { error: error } = await supabase
        .from('articles')
        .delete()
        .eq('id', e.id);
      if (error) throw error;
      alert(`Article with title ${e.article_title} delted successfully`);
      router.refresh();
    } catch (error: any) {
      console.error(error);
      alert(`Error occured:\n${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="lg:px-16 px-4 py-24 pb-48 flex lg:flex-row flex-col justify-center lg:items-start items-center gap-16">
      {/* <div className="flex lg:w-fit w-full lg:justify-center justify-center flex-col gap-4 lg:items-center items-center rounded-2xl lg:p-12 p-4 shadow-2xl shadow-foreground/5">
        <h1 className="lg:text-4xl text-3xl font-bold tracking-tight">
          Quick Menu
        </h1>
        <ul className="flex flex-col justify-start items-start gap-2 w-full">
          <li className="w-full basis-full">
            <Link href="/dashboard/add-article" className="w-full">
              <Button
                className="lg:text-lg text-base py-6 px-8 w-full"
                variant={'secondary'}
              >
                Add A New Article
              </Button>
            </Link>
          </li>
          <li className="w-full basis-full">
            <Link href="/dashboard/edit-article" className="w-full">
              <Button
                className="lg:text-lg text-base py-6 px-8 w-full"
                variant={'secondary'}
              >
                Edit An Existing Article
              </Button>
            </Link>
          </li>
          <li></li>
        </ul>
      </div> */}

      <div className="flex justify-center items-center flex-col lg:w-[650px] w-full gap-4 lg:p-12 p-4 rounded-2xl shadow-2xl shadow-foreground/5">
        <h1 className="lg:text-4xl text-3xl font-bold tracking-tight">
          <span className="text-foreground">Articles</span> Listed
        </h1>
        {articles.length === 0 && (
          <h1 className="lg:text-lg text-base">
            You do not have any articles published yet.
          </h1>
        )}
        {!articles
          ? null
          : articles.map((e, i) => (
              <div
                key={i}
                className="px-6 py-4 w-full rounded-[var(--radius)] border-secondary border-[1px] transition-all duration-300 ease-in-out"
              >
                <div className="inline-flex justify-between items-center w-full">
                  <Link
                    href={`/articles/${e.article_slug}`}
                    className="inline-flex justify-between items-center"
                  >
                    <h1 className="inline-flex flex-row items-center gap-1  hover:underline hover:text-primary transition-all duration-100 ease-in-out">
                      <span className="text-2xl font-semibold text-clip line-clamp-1">
                        {e.article_title}
                      </span>
                      <FiArrowUpRight className="block shrink-0 grow w-6 h-6" />
                    </h1>
                  </Link>
                  <div className="flex gap-2 flex-row-reverse">
                    <AlertDialog>
                      <AlertDialogTrigger className="p-2 border-[1px] border-destructive rounded-[var(--radius)] hover:bg-destructive/10 text-sm transition-colors ease-in-out duration-300">
                        <RiDeleteBin2Line />
                      </AlertDialogTrigger>
                      <AlertDialogContent className="border-destructive">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Doing this will <i>permanently</i> delete your
                            article <b> {e.article_title}</b>.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="hover:bg-background border-destructive">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-destructive hover:bg-destructive/80 text-background"
                            onClick={() => {
                              handleArticleDeletion(e);
                            }}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Link
                      href={`/dashboard/edit-article/${e.article_slug}`}
                      className="border-[1px] border-primary rounded-[var(--radius)] hover:bg-primary/10 text-sm transition-colors ease-in-out duration-300 p-2"
                    >
                      <RiPencilLine />
                    </Link>
                  </div>
                </div>
                <p className="text-sm line-clamp-2 pt-1 max-w-[90%]">
                  {e.article_content.replace(/(<([^>]+)>)/gi, '')}
                </p>
                <div className="flex flex-row flex-wrap pt-4 md:gap-4 gap-2 justify-between ">
                  {/* <div className="inline-flex items-center gap-1">
                        <CiLocationOn className="w-5 h-5" />
                        <span className="font-semibold">{e.location}</span>
                      </div> */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="inline-flex items-center gap-2">
                      <FaRegUser className="w-4 h-4" />
                        <span className="font-medium">
                          {e.article_writer_name}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent >
                        Published By
                      </TooltipContent >
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger className="inline-flex items-center gap-2">
                      <FaRegCalendarAlt className="w-4 h-4" />
                      <span className="font-medium">
                        {new Date(e.created_at).toDateString()}
                      </span>
                      </TooltipTrigger>
                      <TooltipContent >
                        Published On
                      </TooltipContent >
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            ))}
        <div className="px-6 py-4 w-full rounded-[var(--radius)] border-secondary border-[1px] transition-all duration-300 ease-in-out">
          <Link
            href={`/dashboard/add-article`}
            className="hover:text-primary transition-all duration-100 ease-in-out"
          >
            <h1 className="text-xl font-semibold inline-flex flex-row items-center gap-2 line-clamp-1 hover:underline">
              <IoIosAddCircleOutline className="w-6 h-6"/>
              Add A New Article
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainDashboardPage;
