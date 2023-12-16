'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cn } from '@/lib/utils';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { redirect } from 'next/navigation';
import { Button } from '../ui/button';
import { Link1Icon } from '@radix-ui/react-icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation"

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  college: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  semester: Yup.number().required("Required").min(1).max(8)
});

const colleges : Object = {
  0 : "Guru Tegh Bahadur Institute of Technology",
  1 : "Bhagwan Parshuram Institute of Technology",
  2 : ""
}

const SignUp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  async function signUp(formData: {email: string, password: string, college: string, name: string, semester: number}) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {data: {
        'college': formData.college,
        'full_name': formData.name,
        'semester': formData.semester
      }, emailRedirectTo: `${location.origin}/auth/callback`}
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Please check your email for further instructions.');
      // window.location = window.location.origin + "/login";
    }
  }

  async function signUpGoogle() {
    await supabase.auth.signInWithOAuth({provider: "google", options: {redirectTo: `${location.origin}/auth/callback`}}).then(() => {router.refresh()}).catch((error) => {console.error(error); throw error;})
  }

  return (

    <div className='flex justify-center items-center flex-col min-w-screen lg:p-16 lg:py-24 py-16 px-8'>
      <div className="w-full lg:w-[400px] flex flex-col items-center justify-center shadow-2xl shadow-foreground/5 lg:px-12 lg:py-6 px-4 py-8 rounded-[1em]">
        {/* <Button variant={"outline"} onClick={signUpGoogle} className='w-full flex flex-row gap-2 hover:bg-background '>
          <FcGoogle className="w-6 h-6"/>
          Sign up with Google
        </Button>
        <br/> */}
        {/* <h2 className="w-full text-center text-5xl">Sign Up</h2> */}
        <Formik
          initialValues={{
            email: '',
            password: '',
            college: '',
            name: '',
            semester: 1,
          }}
          validationSchema={SignUpSchema}
          onSubmit={signUp}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="w-full flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <Field
                className={cn('input p-2 rounded-lg', errors.name && touched.name && 'bg-red-50')}
                id="name"
                name="name"
                type="text"
                placeholder="Harjot Singh"
              >
              </Field>
              {errors.name && touched.name ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.name}</div>
              ) : null}
              <label htmlFor="email">College</label>
              <Field
                className={cn('input p-2 rounded-lg', errors.college && touched.college && 'bg-red-50')}
                id="college"
                name="college"
                type="text"
                placeholder="GTBIT"
              >
              </Field>
              {errors.college && touched.college ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.college}</div>
              ) : null}
              <label htmlFor="email">Semester</label>
              <Field
                className={cn('input p-2 rounded-lg', errors.semester && touched.semester && 'bg-red-50')}
                id="semester"
                name="semester"
                type="number"
              >
              </Field>
              {errors.semester && touched.semester ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.semester}</div>
              ) : null}

              <label htmlFor="email">Email</label>
              <Field
                className={cn('input p-2 rounded-lg', errors.email && touched.email && 'bg-red-50')}
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
                className={cn('input p-2 rounded-lg', errors.password && touched.password && 'bg-red-50')}
                id="password"
                name="password"
                type="password"
                placeholder="********"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.password}</div>
              ) : null}
              
              {/* <Select>
                  <SelectTrigger className="w-full rounded-lg text-md text-">
                    <SelectValue placeholder="Select Your College"  className='opacity-[50%]' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>College</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> */}
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
