'use client';

import { IoBed } from "react-icons/io5";
import { PiBathtubFill } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { AiFillSafetyCertificate } from "react-icons/ai";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useState } from "react";  




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
    pharmacyDistance: number | null;
    downtownDistance: number | null;
    groceryDistance: number | null;
    legitimate: boolean | null;
  };
type HouseListProps = {
    houses: House[];
};

export default function HouseList({houses}: HouseListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const housesPerPage = 5;

    // Calculate total pages
    const totalPages = Math.ceil(houses.length / housesPerPage);

    // Get houses for the current page
    const startIndex = (currentPage - 1) * housesPerPage;
    const endIndex = startIndex + housesPerPage;
    const currentHouses = houses.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        }
    };
    
    
    return (
        <div>
            {/* <Pagination>
                <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                    <PaginationLink
                        href="#"
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? "font-bold" : ""}
                    >
                        {index + 1}
                    </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                    />
                </PaginationItem>
                </PaginationContent>
            </Pagination> */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 p-4 ">
                {houses.map((house) => (
                    <div key={house.id} className="max-w-fit min-w-fit mx-auto">
                        
                        <img src={house.image!} className="h-[250px] w-[350px] rounded-lg" />
                        
                        <div className="flex flex-col gap-2 py-2">
                            <div className="flex justify-between items-center">
                            
                            <div className="flex gap-2 items-center">
                                <h2 className="text-xl font-semibold">{house.name}</h2>
                                <AiFillSafetyCertificate className="fill-[#39ff14]"/>    
                            </div>
                            <Button variant="outline" className="w-fit"><FaHeart/></Button>
                            </div>
                            
                            <p className="font-light">{house.address}</p>
                            <div className="flex items-center gap-8">
                                <p className="flex gap-2 font-light items-center"><IoBed /> {house.bedrooms}</p>
                                <p className="flex gap-2 font-light items-center"><PiBathtubFill /> {house.bathrooms}</p>
                                <p className="flex gap-2 font-light items-center"><FaSchool /> {house.schoolDistance}</p>
                                <p className="flex gap-2 font-light items-center"><MdLocalGroceryStore /> {house.groceryDistance}</p>
                                <p className="flex gap-2 font-light items-center"><FaNotesMedical /> {house.pharmacyDistance}</p>
                            </div>
                            
                            {/* <p>School Distance: {house.schoolDistance} miles</p> */}
                            <p className="font-light">${house.price}/month</p>
                        </div>
                        
                        
                    </div>
                ))}
            </div>
            
        </div>
    )
}