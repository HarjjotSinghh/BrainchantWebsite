'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cn } from '@/lib/utils';
import { Field, Form, Formik } from 'formik';
import { Link } from 'next-view-transitions';
import * as Yup from 'yup';

const ResetPasswordSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required')
});

const ResetPassword: React.FC = () => {
	const supabase = createClientComponentClient();
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

	async function resetPassword(formData: { email: string }) {
		const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
			redirectTo: `${window.location.origin}/auth/update-password`
		});

		if (error) {
			setErrorMsg(error.message);
		} else {
			setSuccessMsg('Password reset instructions sent.');
		}
	}

	return (
		<div className="card">
			<h2 className="w-full text-center">Forgot Password</h2>
			<Formik
				initialValues={{
					email: ''
				}}
				validationSchema={ResetPasswordSchema}
				onSubmit={resetPassword}
			>
				{({ errors, touched }) => (
					<Form className="column w-full">
						<label htmlFor="email">Email</label>
						<Field
							className={cn('input', errors.email && 'bg-red-50')}
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>
						{errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : null}
						<button className="button-inverse w-full" type="submit">
							Send Instructions
						</button>
					</Form>
				)}
			</Formik>
			{errorMsg && <div className="text-center text-red-600">{errorMsg}</div>}
			{successMsg && <div className="text-center text-black">{successMsg}</div>}
			<Link href="/sign-in" className="link">
				Remember your password? Sign In.
			</Link>
		</div>
	);
};

export default ResetPassword;
