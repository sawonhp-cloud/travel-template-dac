import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Travel Boss | Go Beyond the Ordinary",
  description:
    "Thoughtful small-group journeys for curious people. Discover places that stay with you long after you come home.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
