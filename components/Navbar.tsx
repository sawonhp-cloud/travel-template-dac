"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaGlobeAmericas, FaBars, FaTimes } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Journeys", "#trips"],
    ["Our story", "#about"],
    ["Field notes", "#stories"],
  ];
  return (
    <header className="site-header">
      <nav className="nav wrap">
        <Link className="brand" href="/">
          <span className="brand-mark">
            T
          </span>
          <span className="uppercase text-3xl gap-2">
            travel <span className="brand-accent">boss</span>
          </span>
        </Link>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([name, href]) => (
            <a className="text-xl" key={name} href={href} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
          <a className="nav-cta" href="#trips" onClick={() => setOpen(false)}>
            Plan your trip <FaArrowRight />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </nav>
    </header>
  );
}
