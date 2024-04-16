'use client';
import { Link } from 'next-view-transitions';
import { CiLocationOn, CiCalendarDate, CiMoneyBill } from 'react-icons/ci';
import { FiArrowUpRight } from 'react-icons/fi';
import { useCallback, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { htmlSanitize } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa';

export default function ArticlesClient({ articles }: { articles: any[] }) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const tag = searchParams.get('tag');
	const [selectedTag, setSelectedTag] = useState<string | null>(tag);
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	const setTag = (value: string) => {
		setSelectedTag(value);
		router.push(pathname + '?' + createQueryString('tag', value));
	};

	const filteredArticles = selectedTag
		? articles.filter((article) => article.article_tags?.includes(selectedTag))
		: articles;

	return (
		<div className="flex justify-center items-start min-w-screen lg:px-8 px-0 py-24 lg:flex-row-reverse flex-col-reverse lg:gap-24 gap-16">
			<div className="flex justify-center items-center flex-col w-fit max-w-[1150px] gap-4 lg:p-12 p-4 rounded-2xl border-border/50 border-2 hover:border-border/70 transition-all duration-300 ease-in-out">
				<h1 className="md:text-6xl text-5xl font-bold tracking-tighter text-pretty pb-4">
					Brainchant <span className="font-medium">Articles</span>
				</h1>
				<div className="mb-4 flex justify-center items-center gap-4 w-full">
					{/* <Label
                        htmlFor="select-tag"
                        className="text-lg font-semibold"
                    >
                        Select Category{' '}
                    </Label> */}
					<Select
						onValueChange={(value: string) => {
							setTag(value);
						}}
						defaultValue={tag ?? ''}
					>
						<SelectTrigger className="lg:w-[300px] w-full">
							<SelectValue className="text-base font-semibold " placeholder="Filter by a tag" />
						</SelectTrigger>
						<SelectContent>
							{Array.from(new Set(articles.flatMap((article) => article.article_tags))).map(
								(tag, index) => (
									<SelectItem key={index} value={tag}>
										{tag}
									</SelectItem>
								)
							)}
						</SelectContent>
					</Select>
				</div>
				<div className="flex justify-center items-start flex-row flex-wrap gap-8">
					{filteredArticles.length === 0 ? (
						<h1 className="text-lg text-center">
							Currently, there are no articles published.
							<br />
							<Link className="underline" href="/dashboard">
								Publish an article here
							</Link>
						</h1>
					) : (
						filteredArticles.map((e, i) => (
							<div
								key={i}
								className=" w-full rounded-lg border-primary/50 border-[2px] hover:border-primary/100 transition-all duration-300 ease-in-out lg:w-[500px]"
							>
								<Link href={`/articles/${e.article_slug}`}>
									<img
										src={e.article_image_url}
										className="w-full lg:h-[250px] h-[200px] object-cover rounded-t-md "
										alt={e.article_title}
									></img>
								</Link>
								<div className="p-4">
									<Link
										href={`/articles/${e.article_slug}`}
										className="hover:text-primary transition-all duration-100 ease-in-out"
									>
										<h1 className="lg:text-2xl text-xl font-bold inline-flex flex-row items-center gap-1 line-clamp-1 hover:underline">
											{e.article_title}
										</h1>
									</Link>
									<p className="text-sm line-clamp-3 pt-1">
										{htmlSanitize(e.article_content).replace(/(<([^>]+)>)/gi, '')}
									</p>
									<div className="flex flex-row flex-wrap pt-4 md:gap-4 gap-2 justify-between ">
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger className="inline-flex items-center gap-2">
													<FaRegUser className="w-4 h-4" />
													<span className="font-medium">{e.article_writer_name}</span>
												</TooltipTrigger>
												<TooltipContent>Published By</TooltipContent>
											</Tooltip>
											<Tooltip>
												<TooltipTrigger className="inline-flex items-center gap-2">
													<FaRegCalendarAlt className="w-4 h-4" />
													<span className="font-medium">
														{new Date(e.created_at).toDateString()}
													</span>
												</TooltipTrigger>
												<TooltipContent>Published On</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}
