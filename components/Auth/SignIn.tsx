'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cn } from '@/lib/utils';
import { Field, Form, Formik } from 'formik';
import { Link } from 'next-view-transitions';
import * as Yup from 'yup';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

const SignInSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('Required')
});

const SignIn = () => {
	const supabase = createClientComponentClient();
	const [errorMsg, setErrorMsg] = useState('');
	const router = useRouter();

	async function signIn(formData: { email: string; password: string }) {
		const { error, data } = await supabase.auth.signInWithPassword({
			email: formData.email,
			password: formData.password
		});
		if (error) {
			setErrorMsg(error.message);
			throw error;
		}
		router.refresh();
	}
	async function signUpGoogle() {
		await supabase.auth
			.signInWithOAuth({ provider: 'google', options: { redirectTo: `${location.origin}/auth/callback` } })
			.then(() => {
				router.refresh();
			})
			.catch((error) => {
				console.error(error);
				throw error;
			});
	}

	return (
		<div className="flex justify-center items-center flex-col min-w-screen lg:px-12 px-4 lg:py-24 py-12">
			<div className="w-full lg:w-[400px] flex flex-col items-center justify-center border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out p-12 rounded-2xl">
				{/* <Button variant={"outline"} onClick={signUpGoogle} className='w-full flex flex-row gap-2 hover:bg-background '>
          <FcGoogle className="w-6 h-6"/>
          Sign in with Google
        </Button>
        <br/> */}
				{/* <h2 className="w-full text-center text-5xl">Sign Up</h2> */}
				<Formik
					initialValues={{
						email: '',
						password: ''
					}}
					validationSchema={SignInSchema}
					onSubmit={signIn}
				>
					{({ errors, touched, isSubmitting }) => (
						<Form className="w-full flex flex-col gap-2">
							<label htmlFor="email">Email</label>
							<Field
								className={cn(
									'p-2.5 px-3 transition-all duration-300 ease-in-outh bg-primary/0 rounded-lg border-2 border-primary/50 focus-visible:border-primary/70 focus-visible:outline-none',
									errors.email && touched.email && 'bg-destructive/10'
								)}
								id="email"
								name="email"
								placeholder="hello@gmail.com"
								type="email"
							/>
							{errors.email && touched.email ? (
								<div className="text-red-600 text-xs w-full text-right">{errors.email}</div>
							) : null}
							<label htmlFor="email">Password</label>
							<Field
								className={cn(
									'p-2.5 px-3 transition-all duration-300 ease-in-outh bg-primary/0 rounded-lg border-2 border-primary/50 focus-visible:border-primary/70 focus-visible:outline-none',
									errors.password && touched.password && 'bg-destructive/10'
								)}
								id="password"
								name="password"
								type="password"
								placeholder="********"
							/>
							{errors.password && touched.password ? (
								<div className="text-red-600 text-xs w-full text-right">{errors.password}</div>
							) : null}
							<br />
							<Button
								variant={'outline'}
								className="w-full hover:text-background hover:bg-primary"
								type="submit"
								disabled={isSubmitting}
							>
								Sign In
							</Button>
						</Form>
					)}
				</Formik>

				<Link href="/signup" className="link w-full text-center text-sm">
					<Button variant={'link'} className="p-0 text-foreground">
						Do not have an account?
					</Button>
				</Link>
				{errorMsg && <div className="text-red-600 text-center">{errorMsg}</div>}
			</div>
		</div>
	);
};

export default SignIn;
