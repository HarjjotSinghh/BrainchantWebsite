import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center">
      <Input type="text" className="rounded-r-[0px] focus:ring-0" placeholder="Search for subjects..." />
      <Button type="submit" variant={"default"} className="rounded-l-[0px]">Search</Button>
    </div>
  )
}
