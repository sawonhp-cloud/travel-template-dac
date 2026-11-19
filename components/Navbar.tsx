
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Menu,
  X,
  ChevronDown,
  UserRound,
  Headset,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Visa", href: "/visa" },
  { name: "Tours", href: "/tours" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-blue-500 text-white shadow-sm shadow-blue-200">
            <Plane size={27} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold leading-tight tracking-tight text-blue-700">
              KING STAR
            </h1>
            <p className="text-[10px] font-bold tracking-[3px] text-gray-500">
              TRAVEL & TOURS
            </p>
          </div>

        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">

          <Link
            href="/support"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Headset size={18} />
            Support
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-sm border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            <UserRound size={17} />
            Sign In
          </Link>

          <Link
            href="/register"
            className="rounded-sm bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700"
          >
            Register
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-sm bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden">

          <nav className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

          </nav>

          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-5">

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-bold text-gray-700"
            >
              <UserRound size={17} />
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-blue-600 px-3 py-3 text-center text-sm font-bold text-white"
            >
              Register
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}
