
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import Subject from "./subject";

export default async function SubjectPage({ params }: { params: { subject: string } }) {

  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  
  return <Subject params={params} session={session}></Subject>
}

// export async function generateStaticParams() {
//   const subjects = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/subjects?select=*`, {
//     cache: "force-cache",
//     headers: {
//         Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//     } as HeadersInit,
// }).then((res) => res.json())
 
//   return subjects.map((subject : any) => ({
//     slug: subject.name,
//   }))
// }