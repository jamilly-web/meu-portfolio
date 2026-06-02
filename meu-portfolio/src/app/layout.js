import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meu Currículo & Portfólio',
  description: 'Portfólio profissional desenvolvido com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm border-t border-slate-800">
          © {new Date().getFullYear()} - Desenvolvido com Next.js e Tailwind CSS.
        </footer>
      </body>
    </html>
  );
}