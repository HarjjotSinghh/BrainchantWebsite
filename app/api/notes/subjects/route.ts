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
            console.log('The subject list is: ', subjects);
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
        const { error } = await supabase.from('subjects').insert([
            { id: 27, name: 'Database management system', semester: 4 },
            { id: 32, name: 'Circuits and Systems', semester: 4 },
        ]);
        if(error) {
            console.error('Error while posting subjects:', error);
            return Response.json({ error: 'Error posting subjects' });
        } else {
            console.log('Subjects created successfully');
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
