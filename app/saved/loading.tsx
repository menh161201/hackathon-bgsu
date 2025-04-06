import { Skeleton } from "@/components/ui/skeleton"

export default async function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 animate-pulse min-h-screen">
      <Skeleton className="h-[50px] w-[200px] rounded-xl" />
      <Skeleton className="h-4 w-[100px]" />
      <div className="flex items-center space-x-2 justify-between">
        <Skeleton className="h-[30px] w-[80px]" />
        <Skeleton className="h-[30px] w-[80px]" />
        <Skeleton className="h-[30px] w-[80px]" />
        <Skeleton className="h-[30px] w-[80px]" />
        <Skeleton className="h-[30px] w-[80px]" />
        <Skeleton className="h-[30px] w-[80px]" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </div>
      
    </div>
  )
}
