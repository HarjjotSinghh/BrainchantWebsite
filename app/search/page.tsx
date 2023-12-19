import SearchBar from "@/components/component/search-bar"

export default function Search() {

    return (
        <div className="min-w-screen flex justify-center items-center py-24 flex-col gap-2 px-4">
            <h1 className="text-4xl tracking-tighter">Search for <b>any subject</b></h1>
            <SearchBar/>
        </div>
    )
  }