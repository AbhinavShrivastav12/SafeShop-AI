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
      <body suppressHydrationWarning={true}>
        <div className='min-h-screen bg-gray-50'>
           <Navbar/>
        <main>
          {children}
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
