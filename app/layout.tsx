
import HeaderAuth from "@/components/header-auth"
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SearchBar from "@/components/search/SearchBar";
import { createClient } from "@/utils/supabase/server";
import { CiLock } from "react-icons/ci";
import { RiSparklingLine } from "react-icons/ri";



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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const {data:{user}} = await supabase.auth.getUser()
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen">
            <ResizablePanelGroup direction="horizontal" >
              <ResizablePanel className="shadow-xl rounded-3xl min-w-fit" >
                <div className="flex flex-col gap-6">
                  <nav className="w-full flex justify-center border-b-foreground/10 h-16">
                    <div className="w-full flex items-center justify-between text-sm px-6">
                      <div className="flex gap-5 items-center text-3xl font-black">
                        <Link href={"/"}>LOGO</Link>
                      </div>
                      
                      {user ? <div className="flex gap-10">
                        <Link href={"/"} className="underline">All</Link>
                        <Link href={"/recently-viewed"} >Recently Viewed</Link>
                        <Link href={"/saved"}>Saved</Link>
                        <Link href={"/recommended"} className="flex item-center"><RiSparklingLine className="fill-yellow-500"/> Recommended </Link>
                      </div> 
                      :
                      <div className="flex gap-10">
                        <Link href={"/"} className="underline">All</Link>
                        <div className="flex gap-0 items-center"><CiLock />Recently Viewed</div>
                        <div className="flex gap-0 items-center"><CiLock />Saved</div>
                        <div className="flex gap-0 items-center"><CiLock />Recommended <RiSparklingLine /></div>
                      </div>
                      }
                      
              
                      <HeaderAuth />
                    </div>
                  </nav>
                  {/* <SearchBar /> */}
                  {/* <FilterBar /> */}
                  <div className="h-[88vh] overflow-auto">
                    {children}
                  </div>
                  
                </div>
              </ResizablePanel>
              <ResizableHandle className="" withHandle/>
              <ResizablePanel >Two three</ResizablePanel>
            </ResizablePanelGroup>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
