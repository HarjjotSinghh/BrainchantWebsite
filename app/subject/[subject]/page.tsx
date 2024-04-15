import supabaseServer from '@/utils/supabase/supabaseServer';
import Subject from './subject';
import SubjectUnprotected from './unprotected-subject';
import { Database } from '@/types/supabase';

export default async function SubjectPage({ params }: { params: { subject: string } }) {
	const supabase = supabaseServer();
	const {
		data: { user }
	} = await supabase.auth.getUser();
	//checks if user is logged in
	// console.log('in subject, session is: ', user);
	return (
		// TO LET SIGNED IN USERS SEE NOTES
		// session ? <Subject params={params} session={session}></Subject> : <SubjectUnprotected params={params}></SubjectUnprotected>

		// to let everyone view notes:
		<Subject params={params} user={user}></Subject>
	);
}

export async function generateStaticParams() {
	const subjects = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/subjects?select=*`, {
		cache: 'force-cache',
		headers: {
			Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
		} as HeadersInit
	}).then((res) => res.json());

	return subjects.map((subject: Database['public']['Tables']['subjects']['Row']) => ({
		slug: subject.name
	}));
}
