import supabaseServer from '@/utils/supabase/supabaseServer';
import EditArticleForm from './edit-article-form';

async function EditArticle({ params }: { params: { article: string } }) {
	const supabase = supabaseServer();
	const { data: articleData, error: articleError } = await supabase
		.from('articles')
		.select()
		.eq('article_slug', params.article)
		.single();
	const { data: articleTagsData, error: articleTagsError } = await supabase.from('article_tags').select('*');

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
