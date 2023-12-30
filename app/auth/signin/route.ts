'use server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import type { Database } from '@/types/supabase'
import { SignInWithIdTokenCredentials } from '@supabase/supabase-js'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    await supabase.auth.signInWithPassword({
      email,
      password,
    })
  
    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    })
  
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const token = requestUrl.searchParams.get('token')

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
    await supabase.auth.exchangeCodeForSession(code)
  }

  // if (token) {
  //   const cookieStore = cookies()
  //   const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })
  //   await supabase.auth.signInWithIdToken({
  //     provider: "email",
  //     token: token
  //   })
  // }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
}