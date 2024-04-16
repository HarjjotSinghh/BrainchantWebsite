import supabaseServer from '@/utils/supabase/supabaseServer';
import AccountForm from './account-form';
import { Link } from 'next-view-transitions';

export default async function Account() {
	const supabase = supabaseServer();
	const {
		data: { user }
	} = await supabase.auth.getUser();

	const { data: userProfile, error: userProfileError } = await supabase
		.from('profiles')
		.select()
		.eq('id', user?.id ?? '')
		.single();
	return user ? (
		<AccountForm user={user} userProfile={userProfileError ? null : userProfile} />
	) : (
		<>
			<div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
				<h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
					Please{' '}
					<Link href={'/signin'} className="underline">
						Sign In
					</Link>{' '}
					to see your account.
				</h1>
			</div>
		</>
	);
}
