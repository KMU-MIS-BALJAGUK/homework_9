"use client" ;

import { useState } from "react";
import Header from "../components/Header";

export default function about() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <h1>about</h1>
    </div>
  );
}