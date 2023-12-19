import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import SearchSlugClient from "./search-slug-client"

export default async function Search({ params }: { params: { slug: string } }) {
    const supabase = createServerComponentClient({cookies});
    const {data: subjectsData} = await supabase.from("subjects").select()
    return <SearchSlugClient params={params} subjectsData={subjectsData ?? []}/>
  }