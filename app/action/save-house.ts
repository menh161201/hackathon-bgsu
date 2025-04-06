'use server'
import prisma from "@/db"
import { revalidatePath } from "next/cache";

export async function saveHouse(houseId: number, userId: string) {
    // console.log("pressed");
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        },
        include: {
            savedHouses: true
        }
    })

    const isSaved = user?.savedHouses.some((house) => house.id === houseId);
    
    try {
        if (isSaved) {
            await prisma.user.update({
                where: {id: userId},
                data: {
                  savedHouses: {
                    disconnect: {id: houseId}
                  }
                }
              })
        }else {
            await prisma.user.update({
                where: {id: userId},
                data: {
                  savedHouses: {
                    connect: {id: houseId}
                  }
                }
              }) 
        }
        
      }catch(error) {
        console.log(error);
        
      }
      revalidatePath("/")
}


export async function recentlyViewedHouse(houseId: number, userId: string) {
    
    try {
        await prisma.user.update({
            where: {id: userId},
            data: {
                viewedHouses: {
                    connect: {id: houseId}
                }
            }
            }) 
        
      }catch(error) {
        console.log(error);
        
      }
      revalidatePath("/")
}