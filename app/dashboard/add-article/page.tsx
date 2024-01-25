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
    // const { data: articlesData, error: articlesError } = await supabase
    //     .from('articles')
    //     .select("*")

    return (
        <AddArticleForm
            userProfile={userProfileError ? null : userProfile}
        ></AddArticleForm>
    );
}

export default AddArticle;
