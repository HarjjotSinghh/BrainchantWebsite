'use server';
import ArticlesClient from './articles-page';

export default async function ArticlesServer() {
    const articles = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/articles?select`,
        {
            cache: 'default',
            headers: {
                Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            } as HeadersInit,
        }
    ).then((res) => res.json());
    return <ArticlesClient {...{ articles: articles ? articles : [] }} />;
}
