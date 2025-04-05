import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import FilterBar from "@/components/filter/FilterBar";
import HouseList from "@/components/house/HouseList";
import SearchBar from "@/components/search/SearchBar";


export default async function Home() {
  return (
        <HouseList />
  );
}
