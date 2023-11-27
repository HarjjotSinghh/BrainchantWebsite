// import { cookies } from 'next/headers'
// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
// export async function generateStaticParams() {
//   const supabase = createServerActionClient({cookies})
//   const {data:subjects, error} = await supabase.from('subjects').select("name")
//   if (error) {
//     console.error(error)
//     throw error
//   }
//   else {
//     return subjects.map((subject) => ({
//       "subject": subject.name,
//     }))
//   }
// }


export default function Subject({ params }: { params: { subject: string } }) {
  
  return <div>Subject: {decodeURI(params.subject)}</div>
}