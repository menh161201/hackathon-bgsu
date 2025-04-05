import prisma from "@/db";
import type { Prisma } from "@/generated/prisma";

import type { House } from "@/generated/prisma";


export type HouseWithEverything = Prisma.HouseGetPayload<{
    include: {
      savedBy: true; 
      viewedBy: true; 
    };
  }>;

export async function getAllHouses(): Promise<HouseWithEverything[]> {
    return await prisma.house.findMany({
        include: {
            savedBy: true, 
            viewedBy: true,
        },
})}