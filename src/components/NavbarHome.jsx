import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  return (
    <nav className=" border-gray-200 bg-gray-900 px-[120px] max-lg:px-8 z-50 top-0 absolute w-full font-montserrat py-5 bg-opacity-20">
      <div className=" flex flex-wrap items-center justify-between ">
        <h1 className="font-bold text-lg text-white">Coconut Kawan Kerja</h1>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-1 w-7 h-6 justify-center text-sm text-black rounded-[4px] md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} // Ikon menu burger dan ikon "X"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col max-md:bg-black max-md:bg-opacity-60 max-lg:space-y-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "text-[#3F9D00]"
                    : "text-white hover:text-[#3F9D00]"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className={
                  pathname === "/product" ||
                  pathname === "/productdetail"
                    ? "text-[#3F9D00]"
                    : "text-white hover:text-[#3F9D00]"
                }
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={
                  pathname === "/gallery"
                    ? "text-[#3F9D00]"
                    : "text-white hover:text-[#3F9D00]"
                }
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === "/about"
                    ? "text-[#3F9D00]"
                    : "text-white hover:text-[#3F9D00]"
                }
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
