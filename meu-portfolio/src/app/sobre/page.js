export default function Sobre() {
  const techs = [
    { name: 'Next.js 14', desc: 'Framework React com App Router, otimização de imagens e rotas dinâmicas baseadas em arquivos.' },
    { name: 'React', desc: 'Biblioteca para construção de interfaces baseada em componentes reutilizáveis e estados reativos.' },
    { name: 'Tailwind CSS', desc: 'Framework CSS utilitário para estilização rápida, responsiva e com design moderno.' },
    { name: 'Fetch API', desc: 'Consumo nativo da API do GitHub para renderização de dados no lado do servidor (SSR).' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 mb-6 inline-block">Sobre o Aplicativo</h2>
      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        Este portfólio foi planejado para ser leve, performático e visualmente minimalista. Ele centraliza minha trajetória acadêmica e profissional, além de demonstrar na prática a integração com serviços externos de API de forma assíncrona.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-slate-900">Stack Utilizada no Desenvolvimento</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {techs.map((tech) => (
          <div key={tech.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <h4 className="text-lg font-bold text-indigo-600 mb-2">{tech.name}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{tech.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}