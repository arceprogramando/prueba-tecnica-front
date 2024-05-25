import type { Metadata } from 'next';
import './globals.css';
import { inter } from './ui/fonts';
import SideNav from './ui/dashboard/sidenav';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'prueba-tecnica-front',
  description: 'Prueba tecnica para una prueba tecnica de programación',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialised max-w-5xl mx-auto`}>
        <Header/>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
