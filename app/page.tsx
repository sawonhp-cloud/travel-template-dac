
"use client";

import { useState } from "react";
import Link from "next/link";

const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    price: "৳ 35,000",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    price: "৳ 42,000",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
  },
  {
    name: "Thailand",
    country: "Bangkok & Phuket",
    price: "৳ 28,000",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
  },
];

const services = [
  {
    icon: "✈️",
    title: "Flight Booking",
    description: "Find and book affordable domestic and international flights.",
    link: "/flights",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    description: "Discover comfortable hotels at competitive prices.",
    link: "/hotels",
  },
  {
    icon: "🛂",
    title: "Visa Assistance",
    description: "Get professional support for your travel visa application.",
    link: "/visa",
  },
  {
    icon: "🌍",
    title: "Tour Packages",
    description: "Explore exciting destinations with our tour packages.",
    link: "/tours",
  },
];

export default function HomePage() {
  const [tripType, setTripType] = useState("One Way");

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-300">
              ✈ Your Trusted Travel Partner
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Explore The World,
              <span className="block text-orange-400 mt-6">
                Travel With Confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Discover amazing destinations, book affordable flights,
              hotels and holiday packages with King Star Travel.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/flights"
                className="rounded-sm bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
              >
                Book Your Flight →
              </Link>

              <Link
                href="/tours"
                className="rounded-sm border border-white/50 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-slate-900"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLIGHT SEARCH SECTION */}
      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-5">
        <div className="rounded-sm bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Find Your Flight
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search and compare flights for your next journey.
              </p>
            </div>

            <div className="flex gap-2">
              {["One Way", "Round Trip", "Multi City"].map((type) => (
                <button
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`rounded-sm px-3 py-2 text-xs font-semibold transition md:px-4 md:text-sm ${
                    tripType === type
                      ? "bg-orange-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <form
            action="/flights"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold">
                From
              </label>
              <input
                name="departure"
                placeholder="Dhaka (DAC)"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                To
              </label>
              <input
                name="arrival"
                placeholder="Dubai (DXB)"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Departure
              </label>
              <input
                type="date"
                name="departureDate"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                required
              />
            </div>

            {tripType === "Round Trip" && (
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Return
                </label>
                <input
                  type="date"
                  name="returnDate"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>
            )}

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-5 py-3.5 font-bold text-white transition hover:bg-orange-500"
              >
                Search Flights →
              </button>
            </div>

            <input type="hidden" name="tripType" value={tripType} />
          </form>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <span className="font-bold uppercase tracking-widest text-orange-500">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Everything You Need For Travel
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            From flight booking to complete holiday planning,
            we make your journey easier.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.title}
              className="group rounded-sm border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-blue-50 text-3xl transition group-hover:bg-blue-500">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {service.description}
              </p>

              <span className="mt-5 inline-block font-bold text-orange-500">
                Explore More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-bold uppercase tracking-widest text-orange-500">
                Popular Destinations
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Explore Popular Places
              </h2>
            </div>

            <Link
              href="/tours"
              className="font-bold text-orange-500 hover:text-orange-600"
            >
              View All Destinations →
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="group overflow-hidden rounded-sm bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900">
                    From {destination.price}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-sm font-medium text-orange-500">
                    {destination.country}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {destination.name}
                  </h3>

                  <Link
                    href="/tours"
                    className="mt-5 inline-block font-bold text-slate-700 hover:text-orange-500"
                  >
                    Explore Destination →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1000"
            alt="Travel planning"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div>
          <span className="font-bold uppercase tracking-widest text-orange-500">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            Making Your Travel Experience Simple & Memorable
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            King Star Travel provides travel solutions for individual
            customers, corporate clients and travel agencies. Our goal
            is to make every journey convenient and reliable.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              ["01", "Affordable Travel Solutions"],
              ["02", "Professional Support"],
              ["03", "B2B & B2C Services"],
              ["04", "Easy Booking Experience"],
            ].map(([number, title]) => (
              <div key={number} className="flex gap-3">
                <span className="font-extrabold text-orange-500">
                  {number}
                </span>
                <span className="font-semibold text-slate-800">
                  {title}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-9 inline-block rounded-sm bg-orange-500 px-7 py-3.5 font-bold text-white transition hover:bg-orange-600"
          >
            About King Star Travel →
          </Link>
        </div>
      </section>

      {/* TOUR PACKAGE SECTION */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <span className="font-bold uppercase tracking-widest text-orange-400">
              Travel Packages
            </span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Discover Your Next Adventure
            </h2>
            <p className="mt-4 text-slate-400">
              Find the perfect holiday package for your next journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Dubai Holiday",
                days: "5 Days / 4 Nights",
                price: "৳ 55,000",
                image:
                  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
              },
              {
                title: "Thailand Tour",
                days: "6 Days / 5 Nights",
                price: "৳ 48,000",
                image:
                  "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
              },
              {
                title: "Maldives Escape",
                days: "4 Days / 3 Nights",
                price: "৳ 65,000",
                image:
                  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
              },
            ].map((tour) => (
              <div
                key={tour.title}
                className="overflow-hidden rounded-sm bg-white text-slate-900"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-sm font-medium text-orange-500">
                    {tour.days}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {tour.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Starting From</p>
                      <p className="text-xl font-extrabold text-orange-500">
                        {tour.price}
                      </p>
                    </div>

                    <Link
                      href="/tours"
                      className="rounded-lg bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-orange-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-orange-500">
              Ready For Your Next Journey?
            </h2>
            <p className="mt-3 text-orange-50">
              Let King Star Travel help you plan your next adventure.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-sm bg-white px-8 py-4 font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white"
          >
            Contact Us →
          </Link>
        </div>
      </section>

    </main>
  );
}
