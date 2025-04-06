import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
<<<<<<< HEAD

export default function SearchBar() {
    return (
        <div className="flex flex-col items-center justify-center px-10 pt-5">
            <div className="flex gap-2 w-full"> 
                <Input placeholder="Search . . ." />
                <Button>Find</Button>    
            </div>
            
=======
import ChatBotWrapper from "../chatbot/ChatbotWrapper"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
  
export default function SearchBar() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    Use AI
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>AI</DialogTitle>
                    {/* <ChatBotWrapper /> */}
                    Hi
                </DialogContent>
            </Dialog>
            {/* AI */}
>>>>>>> house
        </div>
    )
}