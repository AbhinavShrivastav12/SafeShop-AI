import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'SafeShop AI',
  description: 'AI Guardian against fake products online',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
