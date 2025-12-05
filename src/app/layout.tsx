import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';


export const metadata = {
  title: 'SafeShop AI',
  description: 'AI Guardian against fake products online',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className='flex flex-col min-h-screen bg-gray-50'>
           <Navbar/>
        <main className='flex-grow'>
          {children}
           <Toaster position="top-center" />
        </main>
        <Footer />
        </div>
      </body>
    </html>
  );
}
