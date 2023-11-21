'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/supabase'

const customTheme = {
  default: {
    colors: {
      brand: 'var(--primary)',
      brandAccent: 'var(--accent)',
      brandButtonText: 'var(--foreground)',
    },
  },
  dark: {
    colors: {
      brandButtonText: 'var(--foreground)',
      defaultButtonBackground: 'var(--primary)',
      defaultButtonBackgroundHover: 'var(--accent)',
    },
  },
}

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  return (
    <div className='min-w-screen flex justify-center items-center'>
        <Auth
        supabaseClient={supabase}
        view="sign_up"
        showLinks={true}
        providers={["google"]}
        appearance={
          {
            extend:true,
            theme: customTheme,
            className: {
              button: "rounded-xl"
            }
          }
        }
        redirectTo="http://localhost:3000/auth/callback"
      />
      
      </div>
    
  )
}