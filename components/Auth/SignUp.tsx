'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cn } from '@/lib/utils';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { redirect } from 'next/navigation';
import { Button } from '../ui/button';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation"

const branchStreamOptions = [
  { value: 'CSE', label: 'Computer Science and Engineering' },
  { value: 'IT', label: 'Information Technology' },
  { value: 'CST', label: 'Computer Science and Technology' },
  { value: 'ITE', label: 'Information Technology and Engineering' },
  { value: 'ECE', label: 'Electronics and Communications Engineering' },
  { value: 'EE', label: 'Electrical Engineering' },
  { value: 'EEE', label: 'Electrical and Electronics Engineering' },
  { value: 'ICE', label: 'Instrumentation and Control Engineering' },
  { value: 'ME', label: 'Mechanical Engineering' },
  { value: 'CE', label: 'Civil Engineering' },
];

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  college: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  semester: Yup.number().required("Required").min(1).max(8),
  branchStream: Yup.string().required("Required").oneOf(branchStreamOptions.map((e) => e.value))
});

const SignUp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  async function signUp(formData: {email: string, password: string, college: string, name: string, semester: number, branchStream: string}) {
    const { error, data } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {data: {
        'full_name': formData.name,
        'college': formData.college,
        'semester': formData.semester,
        'branch': formData.branchStream
      }, emailRedirectTo: `${location.origin}/auth/callback`}
    });
    if (error) {
      setErrorMsg(error.message);
      console.error(error);
      throw error;
    } else {
      setSuccessMsg('Please check your email for further instructions.');
      // window.location = window.location.origin + "/login";
    }
  }

  async function signUpGoogle() {
    await supabase.auth.signInWithOAuth({provider: "google", options: {redirectTo: `${location.origin}/auth/callback`}}).then(() => {router.refresh()}).catch((error) => {console.error(error); throw error;})
  }

  return (

    <div className='flex justify-center items-center flex-col min-w-screen lg:p-16 lg:py-24 py-16 px-0'>
      <div className="w-full lg:w-[400px] flex flex-col items-center justify-center shadow-2xl shadow-foreground/5 lg:px-12 lg:py-6 px-4 py-8 rounded-[1em]">
        {/* <Button variant={"outline"} onClick={signUpGoogle} className='w-full flex flex-row gap-2 hover:bg-background '>
          <FcGoogle className="w-6 h-6"/>
          Sign up with Google
        </Button>
        <br/> */}
        <Formik
          initialValues={{
            email: '',
            password: '',
            college: '',
            name: '',
            semester: 1,
            branchStream: ''
          }}
          validationSchema={SignUpSchema}
          onSubmit={signUp}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="w-full flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Field
                className={cn('input p-2 rounded-lg border-1 border-primary/30 border', errors.name && touched.name && 'bg-red-50')}
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
              >
              </Field>
              {errors.name && touched.name ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.name}</div>
              ) : null}
              <label htmlFor="email">College</label>
              <Field
                className={cn('input p-2 rounded-lg border-1 border-primary/30 border', errors.college && touched.college && 'bg-red-50')}
                id="college"
                name="college"
                type="text"
                placeholder="Your College"
              >
              </Field>
              {errors.college && touched.college ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.college}</div>
              ) : null}
              <label htmlFor="email">Semester</label>
              <Field
                className={cn('input p-2 rounded-lg border-1 border-primary/30 border', errors.semester && touched.semester && 'bg-red-50')}
                id="semester"
                name="semester"
                type="number"
              >
              </Field>
              {errors.semester && touched.semester ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.semester}</div>
              ) : null}

              <label htmlFor="branchStream">Branch/Stream</label>
              <Field
                as="select"
                className={cn('input p-2 rounded-lg border-1 border-primary/30 border', errors.branchStream && touched.branchStream && 'bg-red-50')}
                id="branchStream"
                name="branchStream"
              >
                <option value="" label="Select Branch/Stream"/>
                {branchStreamOptions.map(option => (
                  <option key={option.value} className='max-w-full' value={option.value}>{option.label}</option>
                ))}
              </Field>
              {errors.branchStream && touched.branchStream ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.branchStream}</div>
              ) : null}

              <label htmlFor="email">Email</label>
              <Field
                className={cn('input p-2 rounded-lg border-1 border-primary/30 border', errors.email && touched.email && 'bg-red-50')}
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
                className={cn('input p-2 rounded-lg border-1 border-primary/30 border', errors.password && touched.password && 'bg-red-50')}
                id="password"
                name="password"
                type="password"
                placeholder="********"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.password}</div>
              ) : null}
              
              <br/>
              <Button variant={"outline"} className="w-full hover:text-background hover:bg-primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        
        <Link href="/signin" className="link w-full text-center text-sm">
          <Button variant={"link"} className='p-0 text-foreground'>
            Already have an account?
          </Button>
        </Link>
        {errorMsg && <div className="text-red-600 text-center pt-4">{errorMsg}</div>}
        {successMsg && <div className="text-text text-center pt-4">{successMsg}</div>}
      </div>
    </div>
  );
};

export default SignUp;
