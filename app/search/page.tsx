import SearchBar from '@/components/component/search-bar';

export default function Search() {
	return (
		<div className="min-w-screen flex justify-center items-center py-24 pb-96 flex-col gap-6 px-4">
			<h1 className="lg:text-5xl text-4xl tracking-tighter text-center">
				Search for <b>any subject</b>
			</h1>
			<div className="w-full max-w-2xl">
				<SearchBar />
			</div>
		</div>
	);
}
