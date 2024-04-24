import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';
import { cookies } from 'next/headers';

// subject names for sem 4:
// Database Management Systems
// Technical writing
// Probability statistics and linear programming
// Programming in java
// Theory of computation
// Circuits and Systems

// add notes
export async function POST() {
    // remember to adjust the semester and notes_id accordingly!
    let semester = 2;
    let notes_id = 94;

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
                    subject: 'Power Systems',
                    title: 'Handwritten notes',
                    link: appendLink(
                        'https://drive.google.com/file/d/1C5__YUSPXLDedQuTZWq7xMCvh5ss_h04/view?usp=drive_link'
                    ),
                },
                {
                    id: notes_id++,
                    semester,
                    subject: 'Power Systems',
                    title: 'Complete notes',
                    link: appendLink(
                        'https://drive.google.com/file/d/1C5aCewKIqtXW6T2xkxDrffqV7j33uGrZ/view?usp=drive_link'
                    ),
                },
            ])
            .select();
        if (data) {
            console.log('The notes created in /add-notes are: ', data);
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

