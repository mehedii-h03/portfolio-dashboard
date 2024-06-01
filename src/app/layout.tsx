import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RiNewsLine } from "react-icons/ri";
import { PiFilesBold } from "react-icons/pi";
import { LuFileSignature } from "react-icons/lu";
import { BiNews } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard of mehedii.h03 portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            {children}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-3 w-60 min-h-full text-base-content border-r space-y-2 text-md bg-white">
              <li className="pb-4 border-b">
                <a>Dashboard</a>
              </li>
              <li>
                <Link href={"/projects"}>
                  <PiFilesBold /> Projects
                </Link>
              </li>
              <li>
                <a>
                  <RiNewsLine /> Blogs
                </a>
              </li>
              <li>
                <a>
                  <LuFileSignature /> Add Projects
                </a>
              </li>
              <li className="pb-6">
                <a>
                  <BiNews />
                  Add Blogs
                </a>
              </li>
              <li className="border-t pt-2">
                <a>
                  <GoHome />
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
