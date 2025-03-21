import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarLeft from "@/components/common/navbar/SidebarLeft";
import { ThemeProvider } from "@/components/ui/theme-provider";
import SidebarRight from "@/components/common/navbar/SidebarRight";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Devalentine's Portfolio",
  description: "Showcasing the projects and skills of Devalentine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} ${inter.style} relative antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="fixed top-0 z-[-2] h-full min-h-screen w-screen bg-[#020617] bg-[radial-gradient(#ffffff33_1px,#020617_1px)] bg-[size:40px_40px] 3xl:bg-[size:20px_20px]"></div>
          <div className="gradient fixed z-[-1] opacity-80 md:opacity-70 top-0 left-0 h-full w-full"></div> */}
          <main className="w-full flex justify-center items-center">
            <SidebarProvider className="flex justify-center">
              <div className="flex justify-center w-full xl:max-w-[1200px] h-full min-h-screen">
                <SidebarLeft />
                <div className="flex-1 lg:max-w-[640px]">
                  <Header />
                  {children}
                  <Footer />
                </div>
                <SidebarRight />
              </div>
            </SidebarProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
