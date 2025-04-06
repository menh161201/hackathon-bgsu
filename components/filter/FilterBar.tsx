'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  import { Checkbox } from "@/components/ui/checkbox"
  import { Slider } from "@/components/ui/slider"

  import { IoBed } from "react-icons/io5";
  import { PiBathtubFill } from "react-icons/pi";
  import { FaDollarSign } from "react-icons/fa";
  

export default function FilterBar({filters, setFilters}: any) {
    const handleBedroomChange = (value: number) => {
        setFilters((prev:any) => ({
          ...prev,
          bedrooms: prev.bedrooms.includes(value)
            ? prev.bedrooms.filter((bed:any) => bed !== value)
            : [...prev.bedrooms, value],
        }));
      };
    
    const handleBathroomChange = (value: number) => {
        setFilters((prev:any) => ({
            ...prev,
            bathrooms: prev.bathrooms.includes(value)
            ? prev.bathrooms.filter((bath:any) => bath !== value)
            : [...prev.bathrooms, value],
        }));
    };

    const handlePriceChange = (value: number[]) => {
        setFilters((prev: any) => ({
          ...prev,
          maxPrice: value[0], // Track only the current slider value (max price)
        }));
      };
      const amenitiesList = ["laundry", "parking", "ac", "pet", "dishwasher", "shuttle"];
      const handleAmenityChange = (amenity: string) => {
        setFilters((prevFilters: any) => ({
          ...prevFilters,
          amenities: {
            ...prevFilters.amenities,
            [amenity]: !prevFilters.amenities[amenity],
          },
        }));
      };

    const handleSchoolTimeChange = (value: number[]) => {
    setFilters((prev: any) => ({
        ...prev,
        maxSchoolTime: value[0], // Track only the current slider value (max time to school)
    }));
    };

    const handleGroceryTimeChange = (value: number[]) => {
    setFilters((prev: any) => ({
        ...prev,
        maxGroceryTime: value[0], // Track only the current slider value (max time to grocery)
    }));
    };
    return (
        
        <div className="px-6 py-4 flex space-x-3 justify-between ">
            <Popover>
                <PopoverTrigger className="rounded-sm shadow-md px-4 py-1 hover:opacity-80">
                    <IoBed />
                </PopoverTrigger>
                <PopoverContent className="w-fit flex flex-col gap-2">
                    {[1, 2, 3, 4].map((bed) => (
                        <div key={bed} className="items-top flex space-x-2">
                        <Checkbox
                            id={`bed${bed}`}
                            checked={filters.bedrooms.includes(bed)}
                            onCheckedChange={() => handleBedroomChange(bed)}
                        />
                        <label htmlFor={`bed${bed}`} className="text-sm font-medium">
                            {bed}
                        </label>
                        </div>
                    ))}
                    {/* <Slider defaultValue={[1]} max={4} step={1} onVal/> */}

                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger className="rounded-lg shadow-md px-4 py-1 hover:opacity-80">
                    <PiBathtubFill />
                </PopoverTrigger>
                <PopoverContent className="w-fit flex flex-col gap-2">
                    {[1, 2, 3, 4].map((bath) => (
                        <div key={bath} className="items-top flex space-x-2">
                        <Checkbox
                            id={`bed${bath}`}
                            checked={filters.bathrooms.includes(bath)}
                            onCheckedChange={() => handleBathroomChange(bath)}
                        />
                        <label htmlFor={`bed${bath}`} className="text-sm font-medium">
                            {bath}
                        </label>
                        </div>
                    ))}
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger className="rounded-lg shadow-md px-4 py-1 hover:opacity-80">
                    <FaDollarSign />
                </PopoverTrigger>
                <PopoverContent className="w-[200px] flex flex-col gap-2">
                    <Slider
                        defaultValue={[2000]} // Start at 2000
                        max={2000} // Maximum price is 2000
                        min={0}
                        step={100} // Step size is 100
                        onValueChange={(value) => handlePriceChange(value)} // Update maxPrice
                    />
                    <div className="flex justify-between text-sm">
                        <span>Max Price: ${filters.maxPrice || 2000}</span>
                    </div>
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger className="rounded-lg shadow-md px-4 py-1 hover:opacity-80">
                    Amenities
                </PopoverTrigger>
                <PopoverContent>
                    {amenitiesList.map((amenity) => (
                        <div key={amenity} className="items-top flex space-x-2">
                            <Checkbox
                            id={`amenity-${amenity}`}
                            checked={filters.amenities[amenity]}
                            onCheckedChange={() => handleAmenityChange(amenity)}
                            />
                            <label htmlFor={`amenity-${amenity}`} className="text-sm font-medium">
                            {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                            </label>
                        </div>
                        ))}
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger className="rounded-lg shadow-md px-4 py-1 hover:opacity-80">
                    Time to School
                </PopoverTrigger>
                <PopoverContent>
                    <Slider
                        defaultValue={[45]} // Start at 45 minutes
                        max={45} // Maximum time is 45 minutes
                        min={0}
                        step={10} // Step size is 10 minutes
                        onValueChange={(value) => handleSchoolTimeChange(value)} // Update maxSchoolTime
                    />
                    <div className="flex justify-between text-sm">
                        <span>Max Time to School: {filters.maxSchoolTime || 45} min</span>
                    </div>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger className="rounded-lg shadow-md px-4 py-1 hover:opacity-80">
                    Time to Grocery
                </PopoverTrigger>
                <PopoverContent>
                    <Slider
                        defaultValue={[45]} // Start at 45 minutes
                        max={45} // Maximum time is 45 minutes
                        min={0}
                        step={10} // Step size is 10 minutes
                        onValueChange={(value) => handleGroceryTimeChange(value)} // Update maxGroceryTime
                    />
                    <div className="flex justify-between text-sm">
                        <span>Max Time to Grocery: {filters.maxGroceryTime || 45} min</span>
                    </div>
                </PopoverContent>
            </Popover>

        </div>  
    )
}