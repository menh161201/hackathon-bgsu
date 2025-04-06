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
  );
}
