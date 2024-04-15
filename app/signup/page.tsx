import { redirect } from 'next/navigation';
import SignUp from '@/components/Auth/SignUp';
import supabaseServer from '@/utils/supabase/supabaseServer';

export default async function SignUpPage() {
	const supabase = supabaseServer();
	const { data } = await supabase.auth.getSession();

	if (data?.session) {
		redirect('/');
	}

	return <SignUp />;
}
