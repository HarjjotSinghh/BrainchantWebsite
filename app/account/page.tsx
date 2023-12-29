'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import AccountForm from './account-form';
import Link from 'next/link';

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session ? (
    <AccountForm session={session} />
  ) : (
    <>
      <div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
        <h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
          Please{' '}
          <Link href={'/signin'} className="underline">
            Sign In
          </Link>{' '}
          to see your account.
        </h1>
      </div>
    </>
  );
}
