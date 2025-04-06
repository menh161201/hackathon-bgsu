

import HouseList from "@/components/house/HouseList";
import prisma from "@/db";
import { createClient } from "@/utils/supabase/server";


export default async function Recommended() {

  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()

  const houses = await prisma.house.findMany({
    where: {
      viewedBy: {
        some: {
          id: user!.id, // Filter houses where the current user's ID exists in the recentlyViewedBy relation
        },
      },
    },
    include: {
      savedBy: true, // Include the savedBy relation for additional context if needed
    },
  });

  const lastHouse = houses[0]
  
  const lastHouseCluster = lastHouse.cluster

  const clusterHouses = await prisma.house.findMany({
    where: {
        cluster: lastHouseCluster
    },
    include: {
        savedBy: true
    }
  })

  
  return (
    <div className="">
      <div className="px-6">
        <h1 className="font-bold text-3xl">Recommended House(s)</h1>
        {/* <p className="text-sm font-light">{clusterHouses.length} home(s) found.</p> */}
      </div>
      <HouseList houses={clusterHouses} userId={user!.id}/>
    </div>
        
  );
}
