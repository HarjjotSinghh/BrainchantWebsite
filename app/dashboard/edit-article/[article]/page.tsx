'use server';
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import EditArticleForm from './edit-article-form';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

async function EditArticle({ params }: { params: { article: string } }) {
    const supabase = createServerComponentClient<Database>({
        cookies: cookies,
    });
    const { data: articleData, error: articleError } = await supabase
        .from('articles')
        .select()
        .eq('article_slug', params.article)
        .single();
    const { data: articleTagsData, error: articleTagsError } = await supabase
        .from('article_tags')
        .select('*');

    return (
        <div>
            <EditArticleForm
                articleData={articleError ? null : articleData}
                articleTags={articleTagsError ? [] : articleTagsData}
            ></EditArticleForm>
        </div>
    );
}

export default EditArticle;
