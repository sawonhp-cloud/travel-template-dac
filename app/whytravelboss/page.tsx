
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Hotel,
  Globe,
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
  Search,
  ShieldCheck,
  Headset,
  Wallet,
  Menu,
  Star,
  ChevronDown,
} from "lucide-react";

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    price: "From $299",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    price: "From $499",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
  },
  {
    name: "Singapore",
    country: "Singapore",
    price: "From $350",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
  },
  {
    name: "Turkey",
    country: "Türkiye",
    price: "From $399",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
  },
];

const packages = [
  {
    name: "Dubai City Escape",
    duration: "4 Days / 3 Nights",
    price: "$599",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    name: "Maldives Paradise",
    duration: "5 Days / 4 Nights",
    price: "$899",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
  },
  {
    name: "Istanbul Adventure",
    duration: "6 Days / 5 Nights",
    price: "$749",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
  },
];

const tabs = [
  { name: "Flights", icon: Plane },
  { name: "Hotels", icon: Hotel },
  { name: "Visa", icon: Globe },
  { name: "Tours", icon: MapPin },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Flights");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Plane size={25} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-blue-700">
                KING STAR
              </h1>
              <p className="text-[10px] font-semibold tracking-[3px] text-gray-500">
                TRAVEL & TOURS
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-gray-600 lg:flex">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/flights" className="hover:text-blue-600">Flights</Link>
            <Link href="/hotels" className="hover:text-blue-600">Hotels</Link>
            <Link href="/visa" className="hover:text-blue-600">Visa</Link>
            <Link href="/tours" className="hover:text-blue-600">Tour Packages</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">
              Sign In
            </Link>
            <Link href="/register" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700">
              Join Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-gray-100 bg-white p-5 lg:hidden">
            {["Home", "Flights", "Hotels", "Visa", "Tours", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-700"
              >
                {item}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-24 md:pb-48 md:pt-32">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-200">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2 className="mt-7 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Explore The World,
              <span className="block text-blue-400">
                Travel With Confidence.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Discover amazing destinations, book affordable flights,
              hotels and unforgettable travel experiences with King Star Travel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/flights" className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700">
                Explore Flights <ArrowRight className="ml-2 inline" size={18} />
              </Link>
              <Link href="/tours" className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white hover:bg-white hover:text-gray-900">
                Discover Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BOX */}
      <section className="relative z-10 mx-auto -mt-24 max-w-7xl px-5">
        <div className="rounded-2xl bg-white p-5 shadow-2xl md:p-8">

          <div className="mb-7 flex flex-wrap gap-3 border-b border-gray-100 pb-5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${
                    activeTab === tab.name
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                      : "bg-gray-50 text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  <Icon size={18} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {activeTab === "Flights" && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <SearchField label="FROM" value="Dhaka (DAC)" icon={<Plane size={18}/>} />
              <SearchField label="TO" value="Dubai (DXB)" icon={<MapPin size={18}/>} />
              <SearchField label="DEPARTURE" value="Select Date" icon={<CalendarDays size={18}/>} />
              <SearchField label="TRAVELERS" value="1 Adult" icon={<Users size={18}/>} />

              <Link
                href="/flights"
                className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                <Search size={19} /> Search
              </Link>
            </div>
          )}

          {activeTab !== "Flights" && (
            <div className="rounded-xl bg-blue-50 p-6 text-center">
              <p className="font-semibold text-gray-700">
                {activeTab} booking service
              </p>
              <Link
                href={`/${activeTab.toLowerCase()}`}
                className="mt-3 inline-flex items-center gap-2 font-bold text-blue-600"
              >
                Explore {activeTab} <ArrowRight size={17}/>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: ShieldCheck, title: "Secure Booking", desc: "Safe and reliable booking experience" },
          { icon: Wallet, title: "Best Value", desc: "Competitive travel prices" },
          { icon: Headset, title: "24/7 Support", desc: "We're here whenever you need us" },
          { icon: Globe, title: "Global Network", desc: "Explore destinations worldwide" },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <item.icon size={26}/>
            </div>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* DESTINATIONS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            subtitle="EXPLORE THE WORLD"
            title="Popular Destinations"
            description="Discover beautiful places and plan your next unforgettable journey."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((place) => (
              <div key={place.name} className="group relative h-80 overflow-hidden rounded-2xl">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-sm text-gray-200">{place.country}</p>
                  <h3 className="mt-1 text-2xl font-bold">{place.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-blue-300">{place.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR PACKAGES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            subtitle="HANDPICKED EXPERIENCES"
            title="Featured Tour Packages"
            description="Explore our selected holiday packages for your next adventure."
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => (
              <div key={item.name} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 hover:scale-110"/>
                  <span className="absolute right-4 top-4 flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-sm font-bold">
                    <Star size={15} className="fill-yellow-400 text-yellow-400"/>
                    {item.rating}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="mt-3 text-sm text-gray-500">{item.duration}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                    <div>
                      <span className="text-xs text-gray-400">Starting from</span>
                      <p className="text-2xl font-extrabold text-blue-600">{item.price}</p>
                    </div>
                    <Link href="/tours" className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 px-5 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Ready For Your Next Adventure?
            </h2>
            <p className="mt-4 leading-7 text-blue-100">
              Let King Star Travel help you plan your perfect journey.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 hover:bg-gray-100">
            Contact Us <ArrowRight className="ml-2 inline" size={18}/>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-5 pb-8 pt-16 text-gray-300">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-extrabold text-white">KING STAR TRAVEL</h3>
            <p className="mt-5 text-sm leading-7 text-gray-400">
              Your trusted travel partner for flights, hotels,
              visa assistance and unforgettable travel experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Quick Links</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link href="/flights">Flights</Link>
              <Link href="/hotels">Hotels</Link>
              <Link href="/visa">Visa Assistance</Link>
              <Link href="/tours">Tour Packages</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Our Services</h4>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link href="/flights">Air Ticketing</Link>
              <Link href="/hotels">Hotel Booking</Link>
              <Link href="/visa">Visa Processing</Link>
              <Link href="/tours">Holiday Packages</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact Us</h4>
            <div className="mt-5 space-y-3 text-sm">
              <p>+880 1751023426</p>
              <p>info@kingstartravel.com</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-7 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} King Star Travel. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function SearchField({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <label className="mb-2 block text-[10px] font-extrabold tracking-wider text-gray-400">
        {label}
      </label>
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
        <span className="text-blue-600">{icon}</span>
        {value}
      </div>
    </div>
  );
}

function SectionHeading({
  subtitle,
  title,
  description,
}: {
  subtitle: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-extrabold tracking-[3px] text-blue-600">
        {subtitle}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold text-gray-900 md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-500">{description}</p>
    </div>
  );
}
