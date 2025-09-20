"use client" ;

import { useState } from "react";
import Header from "../components/Header";

export default function pricing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <h1>pricing</h1>
    </div>
  );
}