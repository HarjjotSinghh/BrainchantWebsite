
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import ArticlesClient from './articles-page';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

export default async function ArticlesServer() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { error: articlesError, data: articlesData } = await supabase
        .from('articles')
        .select('*');
    // const articles = await fetch(
    //     `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/articles?select`,
    //     {
    //         cache: 'force-cache',
    //         headers: {
    //             Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    //         } as HeadersInit,
    //     }
    // ).then((res) => res.json());
    return <ArticlesClient {...{ articles: articlesError ? [] : articlesData }} />;
}
