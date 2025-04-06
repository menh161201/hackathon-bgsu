import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
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
        </div>
    )
}