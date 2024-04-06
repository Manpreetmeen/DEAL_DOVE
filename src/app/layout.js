import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deal-Dove",
  description: "E-commerce website built by manpreet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <marquee width="70%" >
         Get exclusive offers on DEALDOVE & Get Latest Electronic items, Special Deals in TVs, Books, Laptops, Mobile Phones
        </marquee>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
