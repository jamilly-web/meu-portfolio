import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white min-h-[calc(100vh-68px)] flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center md:text-left md:flex md:items-center md:gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">Olá, meu nome é JAMILLY VITORIA</span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Estudante <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">sistemas para internet</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            Conheça meu trabalho e formação.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link href="/projetos" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5">
              Ver Projetos
            </Link>
            <Link href="/profissional" className="border border-slate-500 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-all">
              Experiência
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 mt-12 md:mt-0 justify-center flex">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400/30 p-2 overflow-hidden bg-slate-800 flex items-center justify-center">
            {/* Ícone ou Placeholder de Foto */}
            <span className="text-6xl text-cyan-400 font-mono">&lt;/&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}