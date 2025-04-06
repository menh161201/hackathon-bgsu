'use client';

import { IoBed } from "react-icons/io5";
import { PiBathtubFill } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { AiFillSafetyCertificate } from "react-icons/ai";
import FilterBar from "../filter/FilterBar";
import { MdAttachMoney } from "react-icons/md";

import { useState, useEffect } from "react";  
import { useAddressContext } from "@/context/AddressContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



import { saveHouse } from "@/app/action/save-house";
import { recentlyViewedHouse } from "@/app/action/save-house";


type House = {
    id: number;
    name: string | null;
    address: string | null;
    bathrooms: number | null;
    bedrooms: number | null;
    price: number | null;
    utitlities: number | null;
    amenities: string | null;
    image: string | null;
    schoolDistance: number | null;
    schoolWalkTime: number | null;
    pharmacyDistance: number | null;
    downtownDistance: number | null;
    groceryDistance: number | null;
    legitimate: boolean | null;
    savedBy: {id: string}[]
  };
type HouseListProps = {
    houses: House[];
    userId: string;
   
};

export default function HouseList({houses, userId}: HouseListProps) {
    const { setAddresses } = useAddressContext();

    


    const [filters, setFilters] = useState({
        bedrooms: [] as number[],
        bathrooms: [] as number[],
        maxPrice: 2000,
        maxSchoolTime: 45,
        maxGroceryTime: 45
        
    })

    const filteredHouses = houses.filter((house) => {
        const matchesBedrooms = filters.bedrooms.length === 0 || filters.bedrooms.includes(house.bedrooms || 0);
        const matchesBathrooms = filters.bathrooms.length === 0 || filters.bathrooms.includes(house.bathrooms || 0);
        const matchesPrice = house.price !== null && house.price <= filters.maxPrice;
        const matchesSchoolTime =
        house.schoolWalkTime !== null && house.schoolWalkTime <= filters.maxSchoolTime;
        const matchesGroceryTime =
        house.groceryDistance !== null && house.groceryDistance <= filters.maxGroceryTime;

        return matchesBedrooms && matchesBathrooms && matchesPrice && matchesSchoolTime &&
        matchesGroceryTime;
    })

    useEffect(() => {
        // Extract valid addresses and update the context
        const validAddresses = houses
          .filter((house) => {
            const matchesBedrooms =
              filters.bedrooms.length === 0 || filters.bedrooms.includes(house.bedrooms || 0);
            const matchesBathrooms =
              filters.bathrooms.length === 0 || filters.bathrooms.includes(house.bathrooms || 0);
            const matchesPrice = house.price !== null && house.price <= filters.maxPrice;
            const matchesSchoolTime =
              house.schoolWalkTime !== null && house.schoolWalkTime <= filters.maxSchoolTime;
            const matchesGroceryTime =
              house.groceryDistance !== null && house.groceryDistance <= filters.maxGroceryTime;
      
            return (
              matchesBedrooms &&
              matchesBathrooms &&
              matchesPrice &&
              matchesSchoolTime &&
              matchesGroceryTime
            );
          })
          .map((house) => house.address)
          .filter((address): address is string => address !== null);
      
        setAddresses(validAddresses); // Update the context with valid addresses
      }, [houses, filters, setAddresses]);
    
    // useEffect(() => {
    //     // Extract valid addresses and update the context
    //     const validAddresses = filteredHouses
    //     .map((house) => house.address)
    //     .filter((address): address is string => address !== null);
    //     setAddresses(validAddresses);
    // }, [filteredHouses]);
    return (
        <div>
           <FilterBar filters={filters} setFilters={setFilters}/>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 p-4 ">
            {filteredHouses.map((house) => {
            const isSaved = house.savedBy.some((user) => user.id === userId); // Check if userId is in savedBy

            return (
                <Dialog key={house.id}>
                    {/* <DialogTrigger asChild onClick={() => recentlyViewedHouse(house.id, userId)}> */}
                        <div  className="max-w-fit min-w-fit mx-auto hover:cursor-pointer">
                            <DialogTrigger asChild onClick={() => recentlyViewedHouse(house.id, userId)}>
                                <img
                                    src={house.image!}
                                    className="h-[250px] w-[350px] rounded-lg"
                                    alt={house.name || "House"}
                                />
                            </DialogTrigger >
                            <div className="flex flex-col gap-2 py-2">
                                <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <h2 className="text-xl font-semibold">{house.name}</h2>
                                    <AiFillSafetyCertificate className="fill-[#39ff14]" />
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-fit"
                                    onClick={() => saveHouse(house.id, userId)}
                                >
                                    <FaHeart className={isSaved ? "fill-pink-500" : "fill-gray-500"} />
                                </Button>
                                </div>
                                <p className="font-light">{house.address}</p>
                                <div className="flex items-center gap-8">
                                <p className="flex gap-2 font-light items-center">
                                    <IoBed /> {house.bedrooms}
                                </p>
                                <p className="flex gap-2 font-light items-center">
                                    <PiBathtubFill /> {house.bathrooms}
                                </p>
                                <p className="flex gap-2 font-light items-center">
                                    <FaSchool /> {house.schoolDistance}
                                </p>
                                <p className="flex gap-2 font-light items-center">
                                    <MdLocalGroceryStore /> {house.groceryDistance}
                                </p>
                                <p className="flex gap-2 font-light items-center">
                                    <FaNotesMedical /> {house.pharmacyDistance}
                                </p>
                                </div>
                                <p className="font-light">${house.price}/month</p>
                            </div>
                        </div>
                    {/* </DialogTrigger> */}
                    <DialogContent className="min-w-fit">
                        <div className="w-fit flex gap-2">
                            <img
                                src={house.image!}
                                className=" rounded-lg h-[300px] w-[400px]"
                                alt={house.name || "House"}
                            />
                            
                            <div className="flex flex-col gap-2 py-2">
                                <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <DialogTitle className="text-xl font-semibold">{house.name}</DialogTitle>
                                    <AiFillSafetyCertificate className="fill-[#39ff14]" />
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-fit"
                                    onClick={() => saveHouse(house.id, userId)}
                                >
                                    <FaHeart className={isSaved ? "fill-pink-500" : "fill-gray-500"} />
                                </Button>
                                </div>
                                <p className="font-light">{house.address}</p>
                                <div className="flex items-center gap-8">
                                <p className="flex gap-2 font-light items-center">
                                    <IoBed /> {house.bedrooms}
                                </p>
                                <p className="flex gap-2 font-light items-center">
                                    <PiBathtubFill /> {house.bathrooms}
                                </p>
                                <p className="flex gap-0 font-light items-center">
                                    <MdAttachMoney /> {house.price}
                                </p>
                                
                                </div>
                                
                            </div>
                        </div>
                        
                    </DialogContent>
                </Dialog>
                
            );
            })}
            </div>
            
        </div>
    )
}