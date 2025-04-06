import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import FilterBar from "@/components/filter/FilterBar";
import HouseList from "@/components/house/HouseList";
import ChatBotWrapper from "@/components/chatBot/ChatbotWrapper";
import Map from "@/components/map/Map";

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
            <div className="flex flex-col h-full">
              <ChatBotWrapper />
              <div className="mt-4">
                <Map addresses={["220 McFall Ctr, Bowling Green, Ohio 43403",
                                  "1000 N Main St, Bowling Green, Ohio 43402",
                                  "609 Dussel Rd, Maumee, OH 43537",
                                  "1147 Saco St, Maumee, OH 43537",
                                  "1233 Plum Grove Lane, Toledo, OH 43615"]} />
              </div>
            </div>
          </ResizablePanel>
          
        </ResizablePanelGroup>

      </main>
    
  );
}
