
"use client";

import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { SlCallOut } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Contact Header */}
      <section className="w-full px-4 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1450px] space-y-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg text-gray-500 transition-colors hover:text-blue-600"
          >
            <GoArrowLeft />
            Home
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-blue-600 sm:text-xl">
            Get in touch with us for any queries or feedback.
            Our team is available 24/7 to assist you.
          </p>

        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="w-full px-4 pb-20">
        <div className="mx-auto grid grid-col w-full max-w-[1450px] grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          

<div className="mx-auto w-full max-w-md space-y-5">

  {/* Phone Card */}
  <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
      <SlCallOut className="text-2xl text-blue-600" />
    </div>

    <div className="min-w-0 space-y-1">
      <span className="block text-xs font-bold uppercase tracking-[2px] text-gray-400">
        Call Us
      </span>

      <a
        href="tel:+8801751023426"
        className="block text-base font-semibold text-gray-800 transition-colors hover:text-blue-600 sm:text-lg"
      >
        +880 1751023426
      </a>
    </div>
  </div>

  {/* Email Card */}
  <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
      <AiOutlineMail className="text-2xl text-blue-600" />
    </div>

    <div className="min-w-0 space-y-1">
      <span className="block text-xs font-bold uppercase tracking-[2px] text-gray-400">
        Email Us
      </span>

      <a
        href="mailto:sawonhp1@gmail.com"
        className="block break-all text-base font-semibold text-gray-800 transition-colors hover:text-blue-600 sm:text-lg"
      >
        sawonhp1@gmail.com
      </a>
    </div>
  </div>

</div>




          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

            <form className="space-y-6">

              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}
