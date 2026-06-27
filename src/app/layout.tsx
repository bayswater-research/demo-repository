import type { Metadata } from 'next';
import './globals.css';
import GeometricBackground from '@/components/GeometricBackground';

export const metadata: Metadata = {
  title: 'Bayswater Research — Quantitative Trading',
  description: 'Bayswater Research is a quantitative research group dedicated to developing systematic trading strategies through rigorous mathematical modeling and software engineering.',
  openGraph: {
    title: 'Bayswater Research',
    description: 'Quantitative trading strategies, engineered with precision.',
    type: 'website',
    siteName: 'Bayswater Research',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <GeometricBackground />
        {children}
      </body>
    </html>
  );
}
