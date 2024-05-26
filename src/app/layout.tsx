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
      <body className={`${inter.className} antialised  mx-auto`}>
        <Header />
        <div className="flex flex-col md:flex-row justify-center  max-w-5xl mx-auto">
            <SideNav />
          <div className="flex-grow p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
