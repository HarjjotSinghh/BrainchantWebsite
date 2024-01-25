'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import MainDashboardPage from './main-dashboard-page';

async function ArticlesDashboard() {
  const supabase = await createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: articles, error: articlesError } = await supabase
    .from('articles')
    .select('*')
    .eq('article_writer_user_id', session?.user.id ?? '');
  const { data: userProfile, error: userProfileError } = await supabase
    .from('profiles')
    .select()
    .eq('id', session?.user.id ?? '')
    .single();
  if (!session?.user) {
    return (
      <div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
        <h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
          Please{' '}
          <Link href={'/signin'} className="underline">
            Sign In
          </Link>{' '}
          to continue.
        </h1>
      </div>
    );
  }
  if (!userProfile.articles_admin) {
    return (
      <div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
        <h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
          You must be an{' '}
          <Link href={'/'} className="underline">
            admin
          </Link>{' '}
          to access this.
        </h1>
      </div>
    );
  }
  return (
    <MainDashboardPage articles={articles ?? []} userProfile={userProfile}/>
  );
}

export default ArticlesDashboard;
