
import Link from "next/link";
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Send,
  ShieldCheck,
  CreditCard,
  Headset,
} from "lucide-react";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
  FaXTwitter as Twitter,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "Visa Assistance", href: "/visa" },
  { name: "Tour Packages", href: "/tours" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Air Ticketing", href: "/flights" },
  { name: "Hotel Booking", href: "/hotels" },
  { name: "International Tours", href: "/tours" },
  { name: "Visa Processing", href: "/visa" },
  { name: "Hajj & Umrah", href: "/umrah" },
  { name: "Corporate Travel", href: "/corporate-travel" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-12 md:flex-row">

          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Get Travel Updates & Offers
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Subscribe to receive exclusive travel deals,
              special offers and the latest travel updates.
            </p>
          </div>

          <form className="flex w-full max-w-md rounded-sm bg-white p-1.5">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 px-4 text-sm text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-sm bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Subscribe
              <Send size={16} />
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Company Information */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-blue-600 text-white">
              <Plane size={27} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold tracking-wide text-white">
                KING STAR
              </h2>
              <p className="text-[10px] font-semibold tracking-[3px] text-blue-400">
                TRAVEL & TOURS
              </p>
            </div>
          </Link>

          <p className="mt-6 text-sm leading-7 text-gray-400">
            Your trusted travel partner. Discover the world with
            affordable flights, comfortable hotels, visa assistance
            and unforgettable travel experiences.
          </p>

          {/* Social Media */}
          <div className="mt-7 flex items-center gap-3">
            {[
              { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
              { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/", label: "X" },
            ].map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-blue-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-7 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
                >
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-7 text-lg font-bold text-white">
            Our Services
          </h3>

          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-400"
                >
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-7 text-lg font-bold text-white">
            Contact Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-blue-600/10 text-blue-400">
                <MapPin size={19} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Our Office
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Kakrail, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-blue-600/10 text-blue-400">
                <Phone size={19} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Call Us
                </h4>
                <a
                  href="tel:+8801751023426"
                  className="mt-2 block text-sm text-gray-400 transition hover:text-blue-400"
                >
                  +880 1751023426
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                <Mail size={19} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Email Us
                </h4>
                <a
                  href="mailto:info@kingstartravel.com"
                  className="mt-2 block break-all text-sm text-gray-400 transition hover:text-blue-400"
                >
                  info@kingstartravel.com
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Trust Section */}
      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-blue-400" size={25} />
            <span className="text-sm font-semibold text-gray-300">
              Secure Booking
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <CreditCard className="text-blue-400" size={25} />
            <span className="text-sm font-semibold text-gray-300">
              Secure Payments
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Headset className="text-blue-400" size={25} />
            <span className="text-sm font-semibold text-gray-300">
              Customer Support
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 text-center md:flex-row md:text-left">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} King Star Travel.
          All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </Link>

          <Link href="/terms-and-conditions" className="hover:text-blue-400">
            Terms & Conditions
          </Link>

          <Link href="/refund-policy" className="hover:text-blue-400">
            Refund Policy
          </Link>
        </div>

      </div>

    </footer>
  );
}
