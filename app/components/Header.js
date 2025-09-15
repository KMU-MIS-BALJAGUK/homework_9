import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl">LOGO</div>
        <ul className="flex space-x-6">
          <li><Link href="/home">home</Link></li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/pricing">pricing</Link></li>
        </ul>
      </nav>
    </header>
  );
}