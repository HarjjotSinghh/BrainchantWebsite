
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  // const supabase = createRouteHandlerClient<Database>({ cookies })
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${requestUrl.origin}/signin`,
      },
    })


}