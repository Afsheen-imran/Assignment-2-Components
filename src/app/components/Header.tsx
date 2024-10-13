import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header: React.FC = () => {
  return (
    <header className=" bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          Pizza Delight
        </Link>
        {/* Use sheet component from shadcn for mobile screens */}
        <div className="md:hidden text-2xl">
          <Sheet>
            <SheetTrigger>
              <TfiAlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navbar</SheetTitle>
                <SheetDescription>
                  <ul>
                    <li>
                      <Link className="hover:text-yellow-400" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" href="/about-us">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" href="/flavours">
                        Flavours
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-yellow-400"
                        href="/contact-us"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link className="hover:text-yellow-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" href="/about-us">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" href="/flavours">
              Flavours
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400" href="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
