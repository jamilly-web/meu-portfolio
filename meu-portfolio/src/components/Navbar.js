import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wider hover:text-cyan-400 transition">
        PORTFOLIO
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/sobre" className="hover:text-cyan-400 transition">Sobre</Link>
          <Link href="/academic" className="hover:text-cyan-400 transition">Acadêmico</Link>
          <Link href="/profissional" className="hover:text-cyan-400 transition">Profissional</Link>
          <Link href="/projetos" className="hover:text-cyan-400 transition">Projetos</Link>
        </div>
      </div>
    </nav>
  );
}