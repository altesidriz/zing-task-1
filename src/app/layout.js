import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zing7 Task",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
        <div className="flex justify-center">
          <div className="w-5/6 bg-amber-100">
            <Navbar />
            {children}
          </div>
        </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}