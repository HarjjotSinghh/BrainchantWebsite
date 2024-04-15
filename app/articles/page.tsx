import supabaseServer from '@/utils/supabase/supabaseServer';
import ArticlesClient from './articles-page';

export default async function ArticlesServer() {
	const supabase = supabaseServer();
	const { error: articlesError, data: articlesData } = await supabase.from('articles').select('*');
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
