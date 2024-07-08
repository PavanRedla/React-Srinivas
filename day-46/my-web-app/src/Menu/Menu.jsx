import React from "react";
import "./Menu.css";
import Link from "next/link";

export const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
