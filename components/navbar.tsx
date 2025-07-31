"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionTransition } from "./transition-component";
import { itemsNavbar } from "@/data";

const Navbar = () => {
  const pathname = usePathname();

  return (
     <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link key={item.id} href={item.link}>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition duration-200 hover:shadow-xl hover:text-orange-500 ${
                    isActive ? "bg-orange-500 text-white" : "text-white/70 "
                  }`}
                >
                  {item.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
