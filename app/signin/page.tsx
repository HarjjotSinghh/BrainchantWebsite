import { redirect } from 'next/navigation';

import SignIn from '@/components/Auth/SignIn';
import supabaseServer from '@/utils/supabase/supabaseServer';

export default async function SignInPage() {
	const supabase = supabaseServer();
	const { data } = await supabase.auth.getSession();
	// console.log(data.session);
	if (data.session) {
		redirect('/');
	}

	return <SignIn />;
}
