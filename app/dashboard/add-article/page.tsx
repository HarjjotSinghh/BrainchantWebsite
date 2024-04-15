import supabaseServer from '@/utils/supabase/supabaseServer';
import AddArticleForm from './add-article-form';

async function AddArticle() {
	const supabase = supabaseServer();
	const {
		data: { user }
	} = await supabase.auth.getUser();
	const { data: userProfile, error: userProfileError } = await supabase
		.from('profiles')
		.select()
		.eq('id', user?.id ?? '')
		.single();
	const { data: articleTagsData, error: articleTagsError } = await supabase.from('article_tags').select('*');

	return (
		<AddArticleForm
			userProfile={userProfileError ? null : userProfile}
			articleTags={articleTagsError ? [] : articleTagsData}
		></AddArticleForm>
	);
}

export default AddArticle;
