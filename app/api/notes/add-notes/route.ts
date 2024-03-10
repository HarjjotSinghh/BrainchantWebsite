import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

// add notes
export async function POST() {
    // remember to adjust the semester and notes_id accordingly!
    let semester = 4;
    let notes_id = 46;

    // Regex pattern to match everything after the last '/'
    let regex = /\/([^/]+)$/;

    //this functions appends your pdf's link to add "/preview at the end"
    function appendLink(originalLink: string): string {
        // Replace everything after the last '/' with "preview"
        let replacedLink = originalLink.replace(regex, '/preview');
        console.log('replacedLink: ', replacedLink);
        return replacedLink;
    }

    try {
        const supabase = createServerComponentClient<Database>({ cookies });
        const { data, error } = await supabase
            .from('notes')
            .insert([
                {
                    id: notes_id++,
                    semester,
                    subject: 'Theory of computation',
                    title: 'Unit 1 & Unit 2',
                    link: appendLink(
                        'https://drive.google.com/file/d/15AZF_CD6nxxYKHCpGbaH6xjkTQYkd-u7/view?usp=drive_link'
                    ),
                },
                {
                    id: notes_id++,
                    semester,
                    subject: 'Theory of computation',
                    title: 'Unit 1',
                    link: appendLink(
                        'https://drive.google.com/file/d/156FTBy39ZT6W2azFk5smAm6asrWfhBGM/view?usp=drive_link'
                    ),
                },
                {
                    id: notes_id++,
                    semester,
                    subject: 'Theory of computation',
                    title: 'Unit 2',
                    link: appendLink(
                        'https://drive.google.com/file/d/156QLfMRnS8GkarDLllrMo-abmP83p60S/view?usp=drive_link'
                    ),
                },
                {
                    id: notes_id++,
                    semester,
                    subject: 'Theory of computation',
                    title: 'Unit 3 & Unit 4',
                    link: appendLink(
                        'https://drive.google.com/file/d/15THSgGGP0oeOZhVx2sRH02fxtOrh_Jzn/view?usp=drive_link'
                    ),
                },
            ])
            .select();
        if (data) {
            console.log(
                'The notes created in /add-notes are: ',
                data
            );
            return Response.json({
                'The notes created are': data,
            });
        } else {
            console.error('Error while posting notes:', error);
            return Response.json({ error: 'Error posting notes' });
        }
    } catch (error) {
        console.error('An error occurred in posting ntoes:', error);
        return Response.json({ error: 'An error occurred in posting notes' });
    }
}
