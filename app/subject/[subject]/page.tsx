
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