"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👈 현재 페이지 경로 얻기

  const linkStyle = (path) =>
    pathname === path
      ? "text-purple-500"
      : "text-gray-700 hover:text-purple-500"; // 아니면 기본 회색 + hover시 보라색

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 로고 */}
        <div className="text-xl font-bold text-gray-900">LOGO</div>

        {/* 네비게이션 */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link href="/about" className={linkStyle("/about")}>
            About
          </Link>
          <Link href="/pricing" className={linkStyle("/pricing")}>
            Pricing
          </Link>

          {/* Features 드롭다운 */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-purple-500 flex items-center">
              Features
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition">
              <Link href="/features/1" className="block px-4 py-2 hover:bg-gray-100">
                Feature 1
              </Link>
              <Link href="/features/2" className="block px-4 py-2 hover:bg-gray-100">
                Feature 2
              </Link>
            </div>
          </div>

          <Link href="/services" className="text-gray-700 hover:text-purple-500">
            Services
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-purple-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
