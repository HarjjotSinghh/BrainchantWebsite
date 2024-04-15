import supabaseServer from '@/utils/supabase/supabaseServer';
import SearchSlugClient from './search-slug-client';

export default async function Search({ params }: { params: { slug: string } }) {
	const supabase = supabaseServer();
	const { data: subjectData } = await supabase.from('subjects').select();
	return <SearchSlugClient params={params} subjectData={subjectData ?? []} />;
}
