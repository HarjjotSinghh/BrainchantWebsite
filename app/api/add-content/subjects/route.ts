import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

// get subject list
export async function GET() {

    try {
        const supabase = createServerComponentClient<Database>({ cookies });
        const { data: subjects, error } = await supabase
            .from('subjects')
            .select('*')
            .eq('semester', 4);

        if (error) {
            console.error('Error fetching subjects:', error.message);
            return Response.json({ error: 'Error fetching subjects' });
        } else {
            console.log('The subject list for sem 4 is: ', subjects);
            return Response.json({ subjects });
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return Response.json({ error: 'An error occurred' });
    }
}

// add new subjects
export async function POST() {
    try {
        const supabase = createServerComponentClient<Database>({ cookies });
        const { data, error } = await supabase.from('subjects').insert([ //fix why you're getting an error after posting subjects
            { id: 41, name: 'Electrical Machines - II', semester: 4 },
            { id: 42, name: 'Power Systems', semester: 4 },
        ]);
        if(error) {
            console.error('Error while posting subjects:', error);
            return Response.json({ error: 'Error posting subjects' });
        } else {
            console.log('Subjects created successfully: ', data);

        }
    } catch (error) {
        console.error('An error occurred in posting subjects:', error);
        return Response.json({ error: 'An error occurred in posting subjects' });
    }
}

// export async function GET() {
//   const data = "Hello there"

//   return Response.json({ data })
// }
