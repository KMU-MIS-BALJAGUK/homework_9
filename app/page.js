'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center">
      메인 페이지입니다.
    </div>
  );
}

import { useState } from 'react';
import Header from './components/Header';

export function home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <h1>home</h1>
    </div>
  );
}
