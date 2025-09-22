'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👈 현재 페이지 경로 얻기

  const linkStyle = (path) =>
    pathname === path
      ? 'text-purple-500'
      : 'text-gray-700 hover:text-purple-500'; // 아니면 기본 회색 + hover시 보라색

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 로고 */}
        <div className="text-xl font-bold text-gray-900">LOGO</div>

        {/* 네비게이션 */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/" className={linkStyle('/')}>
            Home
          </a>
          <a href="/about" className={linkStyle('/about')}>
            About
          </a>
          <a href="/pricing" className={linkStyle('/pricing')}>
            Pricing
          </a>

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
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Feature 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Feature 2
              </a>
            </div>
          </div>

          <a href="#" className="text-gray-700 hover:text-purple-500">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-500">
            Contact
          </a>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-2 shadow">
          <a href="#" className="block text-purple-500">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-purple-500">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-purple-500">
            Pricing
          </a>
          <a href="#" className="block text-gray-700 hover:text-purple-500">
            Features
          </a>
          <a href="#" className="block text-gray-700 hover:text-purple-500">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-purple-500">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
