import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

export default function SearchBar() {
    return (
        <div className="flex gap-2 px-6 py-4">
            <Input placeholder="Search . . ." />
            <Button>Find</Button>
        </div>
    )
}