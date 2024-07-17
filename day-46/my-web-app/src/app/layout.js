import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/Header/Header";
import { Footer } from "@/Footer/Footer";
import { Menu } from "@/Menu/Menu";

import "bootstrap/dist/css/bootstrap.css"; // importing directly from node_modules

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const menuItems = [
    {
      id: "home",
      path: "home",
      text: "Home",
    },
    {
      id: "about",
      path: "about",
      text: "About",
    },
    {
      id: "contact",
      path: "contact",
      text: "Contact",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Menu menuItems={menuItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
