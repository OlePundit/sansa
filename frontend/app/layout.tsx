import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Company Platform',
  description: 'Professional services platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body>{children}</body>
      {process.env.NODE_ENV === 'production' && gtmId && (
        <GoogleTagManager gtmId={gtmId} />
      )}
    </html>
  );
}