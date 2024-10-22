"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex justify-between mt-[45px]">
        <Link href="/">
          <div className="text-left text-brand600 font-bold text-[28px] tracking-[0.1em]">
            Travel
          </div>
        </Link>
        <div className="text-right">
          <button onClick={toggleMenu}>
            <Image src="/menu.svg" alt="Menu" width={28} height={33} />
          </button>
        </div>
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white"
        >
          {/* Close Button */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="mt-10">
          <Link href="/" className="block px-4 py-2" onClick={toggleMenu}>
            Home
          </Link>
          <a
            href="#destinations"
            className="block px-4 py-2"
            onClick={toggleMenu}
          >
            Destinations
          </a>
          <a href="/about" className="block px-4 py-2" onClick={toggleMenu}>
            About Us
          </a>
          <a
            href="https://www.linkedin.com/in/chriscoderg/"
            className="block px-4 py-2"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </nav>
      </div>

      {/* Overlay to close the menu by clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
