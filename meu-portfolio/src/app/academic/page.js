export default function Academico() {
  const formacoes = [
    {
      curso: 'Sistemas para internet',
      instituicao: 'Faculdade de Tecnologia',
      periodo: '2025 - Cursando',
      detalhes: 'Fundamentos de redes, programação front-end (HTML, CSS, JS), UX/UI Design e design thinking voltado para interfaces.'
    },
    {
      curso: 'tecnico em enfermagem',
      instituicao: 'Escola tecnica Israel',
      periodo: '2022 - 2024',
      detalhes: 'Fundamentos de ENFERMAGEM'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold border-b-2 border-cyan-500 pb-2 mb-12 inline-block">Formação Acadêmica</h2>
      <div className="relative border-l-2 border-slate-200 pl-6 ml-4 space-y-10">
        {formacoes.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[31px] top-1 bg-cyan-500 w-4 h-4 rounded-full border-4 border-slate-50" />
            <span className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">{item.periodo}</span>
            <h3 className="text-xl font-bold text-slate-900 mt-2">{item.curso}</h3>
            <p className="text-md text-indigo-600 font-medium">{item.instituicao}</p>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed max-w-2xl">{item.detalhes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}