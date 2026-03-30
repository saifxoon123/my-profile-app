"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-wide">
          Monir & Sanzida Chemical
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">

  <Link
    href="/"
    className={`relative transition duration-300 ${
      pathname === "/"
        ? "text-yellow-300"
        : "hover:text-yellow-300"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 ${
      pathname === "/" ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`}
  >
    Home
  </Link>

  <Link
    href="/monir-chemical"
    className={`relative transition duration-300 ${
      pathname === "/monir-chemical"
        ? "text-yellow-300"
        : "hover:text-yellow-300"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 ${
      pathname === "/monir-chemical"
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`}
  >
    Monir Chemical
  </Link>

  <Link
    href="/sanzida-chemical"
    className={`relative transition duration-300 ${
      pathname === "/sanzida-chemical"
        ? "text-yellow-300"
        : "hover:text-yellow-300"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 ${
      pathname === "/sanzida-chemical"
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`}
  >
    Sanzida Chemical
  </Link>

  <Link
    href="/contact"
    className={`relative transition duration-300 ${
      pathname === "/contact"
        ? "text-yellow-300"
        : "hover:text-yellow-300"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-300 after:transition-all after:duration-300 ${
      pathname === "/contact"
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }`}
  >
    Contact
  </Link>

</nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col text-center bg-indigo-900 py-6 space-y-6 font-medium">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/monir-chemical" onClick={() => setIsOpen(false)}>
            Monir Chemical
          </Link>
          <Link href="/sanzida-chemical" onClick={() => setIsOpen(false)}>
            Sanzida Chemical
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>

    </header>
  );
}