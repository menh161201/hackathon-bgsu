<<<<<<< HEAD
export default async function Home() {
    return (
          <div>
              Recently Viewed Houses
          </div>
    );
  }
=======


import HouseList from "@/components/house/HouseList";
import prisma from "@/db";
import { createClient } from "@/utils/supabase/server";


export default async function RecentlyViewed() {

  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()

  const houses = await prisma.house.findMany({
    where: {
      viewedBy: {
        some: {
          id: user!.id, // Filter houses where the current user's ID exists in the savedBy relation
        },
      },
    },
    include: {
      savedBy: true, // Include the savedBy relation for additional context if needed
    },
  });

  
  return (
    <div className="">
      <div className="px-6">
        <h1 className="font-bold text-3xl">Recently Viewed House(s)</h1>
      </div>
      <HouseList houses={houses} userId={user!.id}/>
    </div>
        
  );
}
>>>>>>> house
