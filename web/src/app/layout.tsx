import './globals.css';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Clínica Calma',
  description: 'Bienvenido a nuestra plataforma',
  icons: 'favicon.ico',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen light-mode">
        <TopBar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}