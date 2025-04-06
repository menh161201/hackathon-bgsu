<<<<<<< HEAD
import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
=======

import HeaderAuth from "@/components/header-auth"
import { headers } from "next/headers";
>>>>>>> house
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
<<<<<<< HEAD
=======
import ChatBotWrapper from "@/components/chatbot/ChatbotWrapper";
>>>>>>> house
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
<<<<<<< HEAD
import FilterBar from "@/components/filter/FilterBar";
import HouseList from "@/components/house/HouseList";
import SearchBar from "@/components/search/SearchBar";

=======

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { createClient } from "@/utils/supabase/server";
import { CiLock } from "react-icons/ci";
import { RiSparklingLine } from "react-icons/ri";
import Map from "@/components/map/Map";
import { AddressProvider } from "@/context/AddressContext";
import SearchBar from "@/components/search/SearchBar";
>>>>>>> house
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

<<<<<<< HEAD
export default function RootLayout({
=======
export default async function RootLayout({
>>>>>>> house
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
=======
  const supabase = await createClient();
  const {data:{user}} = await supabase.auth.getUser()
  const pathname = (await headers()).get("x-invoke-path") || "/";
  console.log(pathname);
  
>>>>>>> house
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
<<<<<<< HEAD
          <div className="max-h-screen ">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel className="shadow-xl rounded-2xl">
                <div className="flex flex-col">
                  <nav className="w-full flex justify-center border-b-foreground/10 h-16">
                    <div className="w-full flex items-center justify-between text-sm px-10">
                      <div className="flex gap-5 items-center font-semibold">
                        <Link href={"/"}>LOGO</Link>
                      </div>
                      <HeaderAuth />
                    </div>
                  </nav>
                  <SearchBar />
                  <FilterBar />
                  <div className="h-[73vh] overflow-auto">
=======
          <AddressProvider>
          <main className="h-screen">
            <ResizablePanelGroup direction="horizontal" >
              <ResizablePanel className="shadow-3xl min-w-fit" >
                <div className="flex flex-col gap-6">
                  <nav className="w-full flex justify-center border-b-foreground/10 h-16">
                    <div className="w-full flex items-center justify-between text-sm px-6 pt-4">
                      <div className="flex gap-5 items-center text-3xl font-black">
                        <Link href={"/"}>
                          <img src="/Logo.png" alt="" className="w-36"/>
                        </Link>
                      </div>
                      
                      {user ? <div className="flex gap-8 items-center">
                        <Link href={"/"} className="px-2 py- 2 hover:bg-orange-100 hover:text-orange-500">All</Link>
                        <Link href={"/recently-viewed"} className="px-2 py- 2 hover:bg-orange-100 hover:text-orange-500">Recently Viewed</Link>
                        <Link href={"/saved"} className="px-2 py- 2 hover:bg-orange-100 hover:text-orange-500">Saved</Link>
                        <Link href={"/recommended"} className="flex item-center"><RiSparklingLine className="fill-yellow-500"/> Recommended </Link>
                        
                        {/* <Dialog>
                          <DialogTrigger>Open</DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Are you absolutely sure?</DialogTitle>
                              <ChatBotWrapper />
                            </DialogHeader>
                          </DialogContent>
                        </Dialog> */}

                        </div> 
                      :
                      <div className="flex gap-8">
                        <Link href={"/"} className="px-2 py- 2 hover:bg-orange-100 hover:text-orange-500" >All</Link>
                        <div className="flex gap-0 items-center "><CiLock />Recently Viewed</div>
                        <div className="flex gap-0 items-center"><CiLock />Saved</div>
                        <div className="flex gap-0 items-center"><CiLock />Recommended <RiSparklingLine /></div>
                      </div>
                      }
                      
              
                      <HeaderAuth />
                    </div>
                  </nav>
                  
                  
                  {/* <FilterBar /> */}
                  <div className="h-[88vh] overflow-auto">
>>>>>>> house
                    {children}
                  </div>
                  
                </div>
              </ResizablePanel>
<<<<<<< HEAD
              <ResizableHandle className="invisible"/>
              <ResizablePanel>Two three</ResizablePanel>
            </ResizablePanelGroup>
          </div>
=======
              <ResizableHandle className="" withHandle/>
              <ResizablePanel>
              <Map />
              </ResizablePanel>
            </ResizablePanelGroup>
          </main>
          </AddressProvider>
>>>>>>> house
        </ThemeProvider>
      </body>
    </html>
  );
}
