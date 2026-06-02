// Função para buscar uma citação de programação de uma API pública e gratuita
async function getTechQuote() {
  try {
    // Usando a Slip Advice API (API pública de conselhos/citações)
    const res = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-store' // Garante que trará uma frase nova a cada clique/refresh
    });
    
    if (!res.ok) return null;
    
    const data = await res.json();
    return data.slip.advice;
  } catch (error) {
    return null;
  }
}

export default async function Projetos() {
  const advice = await getTechQuote();

  // Seus projetos configurados manualmente aqui (Sem depender de GitHub!)
  const meusProjetos = [
    {
      id: 1,
      nome: 'nutriella',
      descricao: 'Aplicativo de acompanhamento nutricional e menstrual',
      tags: ['React', 'Capacitor', 'Vite'],
      link: '#'
    },
    {
      id: 2,
      nome: 'calma.ai',
      descricao: 'Aplicativo que axilia a regular o sono.',
      tags: ['SQL', 'Database', 'Backend'],
      link: '#'
    },
    {
      id: 3,
      nome: 'Acessibilidade Web por Voz',
      descricao: 'Módulo de navegação assistida utilizando a Web Speech API para leitura de tela e comandos de voz avançados.',
      tags: ['JavaScript', 'Web Speech API', 'UX'],
      link: '#'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Seção da API: Banner com o conselho do dia */}
      {advice && (
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 rounded-2xl mb-12 shadow-md border border-indigo-500/20">
          <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs block mb-1">
            💡 Conselho do Dia 
          </span>
          <p className="text-lg italic font-medium text-slate-100">
            "{advice}"
          </p>
        </div>
      )}

      {/* Título Principal */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 inline-block">
          Projetos Desenvolvidos
        </h2>
        <p className="text-slate-600 mt-3 text-sm">
          Galeria dos principais sistemas, aplicações e módulos de software que desenvolvi.
        </p>
      </div>

      {/* Grid de Projetos Locais */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meusProjetos.map((projeto) => (
          <div 
            key={projeto.id} 
            className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition">
                {projeto.nome}
              </h3>
              <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                {projeto.descricao}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-50 flex flex-col gap-3">
              {/* Tags de Tecnologias */}
              <div className="flex flex-wrap gap-1.5">
                {projeto.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}