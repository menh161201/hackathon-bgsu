import HouseList from "@/components/house/HouseList";
import prisma from "@/db";



export default async function Home() {

  const houses = await prisma.house.findMany();
  return (
    <div className="relative">
      <div className="px-6">
        <h1 className="font-bold text-3xl">All Houses</h1>
        <p className="text-sm font-light">{houses.length} home(s) found.</p>
      </div>
      <HouseList houses={houses}/>
    </div>
        
  );
}
