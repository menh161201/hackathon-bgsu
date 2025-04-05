import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

export default function SearchBar() {
    return (
        <div className="flex flex-col items-center justify-center px-10 pt-5">
            <div className="flex gap-2 w-full"> 
                <Input placeholder="Search . . ." />
                <Button>Find</Button>    
            </div>
            
        </div>
    )
}