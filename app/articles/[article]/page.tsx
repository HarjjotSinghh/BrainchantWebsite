'use server'
import ArticlePage from './article-page';

async function ArticleServer({ params }: { params: { article: string } }) {
    const articles = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/articles?select`,
        {
            cache: 'force-cache',
            headers: {
                Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            } as HeadersInit,
        }
    ).then((res) => res.json());
    const article_ = Object.values(articles).filter((e:any) => e.article_slug === params.article)[0]
    return <ArticlePage article={article_ ? article_ : null} />;
}

// export async function generateStaticParams() {
//     const articles = await fetch(
//         `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/articles?select=*`,
//         {
//             cache: 'force-cache',
//             headers: {
//                 Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//             } as HeadersInit,
//         }
//     ).then((res) => res.json());

//     return articles.map((article: any) => ({
//         slug: article.article_slug,
//     }));
// }

export default ArticleServer;
