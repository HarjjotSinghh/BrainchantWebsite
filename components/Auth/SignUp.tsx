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

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const colleges : Object = {
  0 : "Guru Tegh Bahadur Institute of Technology",
  1: "Bhagwan Parshuram Institute of Technology",
  2: ""
}

const SignUp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  async function signUp(formData: {email: string, password: string}) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Success! Please check your email for further instructions.');
      // window.location = window.location.origin + "/login";
    }
  }

  return (

    <div className='flex justify-center items-center flex-col min-w-screen'>
      <div className=" flex flex-col shadow-2xl shadow-foreground/5 p-12 rounded-[1em]">
        {/* <h2 className="w-full text-center text-5xl">Sign Up</h2> */}
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={signUp}
        >
          {({ errors, touched }) => (
            <Form className="w-full flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Field
                className={cn('input p-2 rounded-lg', errors.email && 'bg-red-50')}
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
                placeholder="YourName123"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600 text-xs w-full text-right">{errors.password}</div>
              ) : null}
              <label htmlFor="email">College</label>
              <Field
                className={cn('input p-2 rounded-lg', errors.password && touched.password && 'bg-red-50')}
                id="college"
                name="college"
                type="text"
                placeholder="Your College"
              >
              </Field>
              
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
              <Button variant={"default"} className="button-inverse w-full mt-4" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
        {successMsg && <div className="text-text">{successMsg}</div>}
        <Link href="/sign-in" className="link w-full text-center text-sm">
          <Button variant={"link"} className='text-foreground p-0 '>
            Already have an account?
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
