import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import FilterBar from "@/components/filter/FilterBar";
import HouseList from "@/components/house/HouseList";
import ChatBotWrapper from "@/components/chatBot/ChatbotWrapper";

export default async function Home() {
  return (
    
      <main className="flex-grow">
        <FilterBar />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel >
            <HouseList />
          </ResizablePanel>
          <ResizableHandle />

          <ResizablePanel >
            <ChatBotWrapper />
          </ResizablePanel>
          
        </ResizablePanelGroup>

      </main>
    
  );
}
