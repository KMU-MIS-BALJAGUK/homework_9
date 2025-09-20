"use client" ;

import { useState } from "react";
import Header from "./components/Header";

export default function home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <h1>home</h1>
    </div>
  );
}