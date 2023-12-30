import React from 'react'
import { ReCaptchaProvider } from "next-recaptcha-v3";
function SignupLayout({children}: {children: React.ReactNode}) {
  return (
    <ReCaptchaProvider>
    {children}
    </ReCaptchaProvider>
  )
}

export default SignupLayout