'use server';
import { Database } from '@/types/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AddArticleForm from './add-article-form';

async function AddArticle() {
    const supabase = createServerComponentClient<Database>({
        cookies: cookies,
    });
    const {
        data: { session },
    } = await supabase.auth.getSession();
    const { data: userProfile, error: userProfileError } = await supabase
        .from('profiles')
        .select()
        .eq('id', session?.user.id ?? '')
        .single();
    const { data: articleTagsData, error: articleTagsError } = await supabase
        .from('article_tags')
        .select("*")

    return (
        <AddArticleForm
            userProfile={userProfileError ? null : userProfile}
            articleTags={articleTagsError ? [] : articleTagsData}
        ></AddArticleForm>
    );
}

export default AddArticle;
