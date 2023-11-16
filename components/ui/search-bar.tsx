import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-[0.1px]">
      <Input type="text" className="rounded-r-[0px]" placeholder="Search for subjects..." />
      <Button type="submit" className="rounded-l-[0px]">Search</Button>
    </div>
  )
}
