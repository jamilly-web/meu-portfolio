export default function Profissional() {
  const experiencias = [
    {
      cargo: 'Desenvolvedor Full-Stack (Freelancer)',
      empresa: 'Projetos Autônomos',
      periodo: 'Nov 2025 - Atual',
      atividades: [
        'Desenvolvimento de aplicações web completas utilizando React e Next.js.',
        'Modelagem e estruturação de bancos de dados relacionais e criação de rotas de API.',
        'Uso de plataformas de automação (como Make) para integração de fluxos e notificações.'
      ]
    },
    {
      cargo: 'Desenvolvedor Mobile Front-End',
      empresa: 'Tech Solutions',
      periodo: 'Mar 2024 - Out 2025',
      atividades: [
        'Construção de aplicações híbridas voltadas para Android e iOS utilizando Capacitor e rotas integradas.',
        'Garantia de padrões de acessibilidade web (navegação por áudio/leitores de tela).',
        'Colaboração próxima com equipes de design de produto utilizando conceitos de Donald Norman.'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 mb-10 inline-block">Trajetória Profissional</h2>
      <div className="space-y-8">
        {experiencias.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{exp.cargo}</h3>
                <p className="text-indigo-600 font-medium text-sm">{exp.empresa}</p>
              </div>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded mt-1 md:mt-0 inline-block self-start">
                {exp.periodo}
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              {exp.atividades.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}