import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import FilterBar from "@/components/filter/FilterBar";
import HouseList from "@/components/house/HouseList";
import SearchBar from "@/components/search/SearchBar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
                    {children}
                  </div>
                  
                </div>
              </ResizablePanel>
              <ResizableHandle className="invisible"/>
              <ResizablePanel>Two three</ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
