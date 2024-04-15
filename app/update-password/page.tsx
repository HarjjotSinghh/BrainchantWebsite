import { redirect } from 'next/navigation';

import UpdatePassword from '@/components/Auth/UpdatePassword';
import supabaseServer from '@/utils/supabase/supabaseServer';

export default async function UpdatePasswordPage() {
	const supabase = supabaseServer();

	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user) {
		redirect('/signin');
	}

	return <UpdatePassword />;
}
