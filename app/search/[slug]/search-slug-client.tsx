'use client';
import SearchBar from '@/components/component/search-bar';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

export default function SearchSlugClient({ params, subjectData }: { params: { slug: string }; subjectData: any[] }) {
	const [searchResults, setSearchResults] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		const options = {
			includeScore: true,
			includeMatches: true,
			threshold: 0.4,
			keys: ['name']
		};
		const fuse = new Fuse(subjectData, options);
		const results = fuse.search(params.slug || '');
		const items = results.map((result) => result.item);
		setSearchResults(items);
		setLoading(false);
	}, [params.slug, subjectData]);
	return (
		<div className="flex justify-center items-center lg:py-0 py-24">
			<div className="min-w-screen max-w-[1800px] h-screen px-4 flex justify-center items-center flex-col">
				<h1 className="lg:text-6xl text-4xl tracking-tighter font-bold pb-8">Search results</h1>
				<div className="flex flex-wrap lg:[&_button]:flex-[0_0_calc(33%-20px)] md:[&_button]:flex-[0_0_calc(50%-20px)] [&_button]:flex-[0_0_calc(100%-20px)] lg:p-16 md:p-12 p-4 border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out gap-8 justify-center items-center">
					{searchResults.length === 0 && !loading && (
						<h1 className="lg:text-2xl text-xl tracking-tighter">
							Could not find the subject <b>{params.slug}</b>
						</h1>
					)}
					{searchResults.map((element, index) => (
						<Link key={index} href={`/subject/${element.name}`}>
							<Button
								className="flex justify-center items-center flex-col p-10 rounded-md hover:text-background"
								variant={'outline'}
							>
								<div className="lg:text-xl text-base">{element.name}</div>
								<div>Semester {element.semester}</div>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
