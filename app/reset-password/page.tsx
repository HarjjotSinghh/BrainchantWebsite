import { redirect } from 'next/navigation';
import ResetPassword from '@/components/Auth/ResetPassword';
import supabaseServer from '@/utils/supabase/supabaseServer';

export default async function ResetPasswordPage() {
	const supabase = supabaseServer();
	const { data } = await supabase.auth.getSession();

	if (data?.session) {
		redirect('/');
	}

	return <ResetPassword />;
}
