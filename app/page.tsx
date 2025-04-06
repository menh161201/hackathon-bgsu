<<<<<<< HEAD
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
=======
import HouseList from "@/components/house/HouseList";
import prisma from "@/db";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()

  const houses = await prisma.house.findMany({
    include: {
      savedBy: true,
    },
  });

  return (
    <div className="">
      <div className="px-6 space-y-6">
        <h1 className="font-bold text-3xl">All Houses</h1>
        {/* <p className="text-sm font-light">{houses.length} home(s) found.</p> */}
      </div>
      <HouseList houses={houses} userId={user!.id}/>
    </div>
>>>>>>> house
  );
}
