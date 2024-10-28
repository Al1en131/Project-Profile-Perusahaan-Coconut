'use client';

import { usePathname } from 'next/navigation';
import NavbarHome from '../components/NavbarHome';
import NavbarDefault from '../components/NavbarDefault';
import Footer from '../components/Footer';
import { Montserrat, Poppins } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-poppins',
});


export default function Layout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isAuth = pathname === '/auth';
  const isDashboard = pathname.startsWith('/dashboard'); // pastikan ini berlaku untuk semua halaman dashboard

  return (
    <div className={`${montserrat.variable} ${poppins.variable}`}>
      {!isAuth && !isDashboard && (isHome ? <NavbarHome /> : <NavbarDefault />)}
      {isDashboard}
      <main>{children}</main>
      {!isAuth && !isDashboard && <Footer />}
    </div>
  );
}

