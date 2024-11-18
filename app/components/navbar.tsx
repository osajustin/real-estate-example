"use client";

import React, { useState } from "react";
import Button from "./button";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="border-primary-neutral h-navbar-height bg-primary-white fixed start-0 top-0 z-20 w-full border-b">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu}
        >
          <Logo />
        </a>

        {/* Resume Button and Mobile Menu Toggle */}
        <div className="flex space-x-3 md:order-2 rtl:space-x-reverse">
          <a
            href="/resume/resume_Justin_Osagie.pdf"
            download="Justin-Osagie-Resume.pdf"
          >
            <Button size="small" variant="primary">
              Contact Us
            </Button>
          </a>
          <button
            onClick={toggleMenu}
            className="text-primary-neutral hover:bg-primary-neutral focus:ring-primary-neutral hover:text-primary-white inline-flex items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                d="M1 1h15M1 7h15M1 13h15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="bg-primary-white mt-4 flex flex-col space-y-2 rounded-lg p-4 text-sm font-medium md:mt-0 md:flex-row md:space-x-6 md:space-y-0 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="#offers"
                onClick={closeMenu}
                className="text-primary-black hover:bg-primary-neutral hover:text-primary-white block rounded px-3 py-2 md:px-4"
              >
                Top Offers
              </a>
            </li>
            <li>
              <a
                href="#search"
                onClick={closeMenu}
                className="text-primary-black hover:bg-primary-neutral hover:text-primary-white block rounded px-3 py-2 md:px-4"
              >
                Search in Offers
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="text-primary-black hover:bg-primary-neutral hover:text-primary-white block rounded px-3 py-2 md:px-4"
              >
                References
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-primary-black hover:bg-primary-neutral hover:text-primary-white block rounded px-3 py-2 md:px-4"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={closeMenu}
                className="text-primary-black hover:bg-primary-neutral hover:text-primary-white block rounded px-3 py-2 md:px-4"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
