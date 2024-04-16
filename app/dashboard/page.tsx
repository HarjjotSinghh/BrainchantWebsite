import { Link } from 'next-view-transitions';
import React from 'react';
import MainDashboardPage from './main-dashboard-page';
import supabaseServer from '@/utils/supabase/supabaseServer';

async function ArticlesDashboard() {
	const supabase = supabaseServer();
	const {
		data: { user }
	} = await supabase.auth.getUser();
	if (!user) {
		return (
			<div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
				<h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
					Please{' '}
					<Link href={'/signin'} className="underline">
						Sign In
					</Link>{' '}
					to continue.
				</h1>
			</div>
		);
	}

	const { data: articles, error: articlesError } = await supabase
		.from('articles')
		.select('*')
		.eq('article_writer_user_id', user.id ?? '');
	const { data: userProfile, error: userProfileError } = await supabase
		.from('profiles')
		.select()
		.eq('id', user.id ?? '')
		.single();
	if (!userProfile?.articles_admin) {
		return (
			<div className="flex min-w-screen justify-center items-center flex-col py-24 pb-96">
				<h1 className="md:text-5xl text-2xl  font-semibold tracking-tighter">
					You must be an{' '}
					<Link href={'/'} className="underline">
						admin
					</Link>{' '}
					to access this.
				</h1>
			</div>
		);
	}
	return (
		<MainDashboardPage
			articles={articlesError ? [] : articles}
			userProfile={userProfileError ? null : userProfile}
		/>
	);
}

export default ArticlesDashboard;
