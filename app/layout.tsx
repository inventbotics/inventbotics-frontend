import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { LoadingScreen } from '@/components/loading-screen';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Inventbotics Components - Innovative Engineering Solutions',
  description: 'Inventbotics Components specializes in IoT, Instrumentation, Secured Wireless Transmission, Power Systems, Data Analytics, Robotics, and PCB Designing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LoadingScreen />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}