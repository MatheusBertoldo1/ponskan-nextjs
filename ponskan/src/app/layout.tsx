import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

// URL base do domínio
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ponskan.com.br';

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ponskan",
  description: "Sitema de detecção de doenças em citrus",
  keywords: ['citros', 'doenças', 'agricultura', 'IA', 'detecção de pragas', 'monitoramento'],

  // Link/card personalizado para compartilhar em redes sociais 
  openGraph: { 
    title: 'Detecção de Doenças em Citros',
    description: 'Identificação rápida e precisa de pragas em citros via IA.',
    type: 'website',
    url: 'https://ponskan.com.br', 
    images: [ 
      {
        url: `${BASE_URL}/images/logotipo-ponskan.jpg`, // Buscar a imagem do link na pasta do site
        width: 1200,
        height: 630,
        alt: 'Sistema de detecção de doenças em citros',
      },
    ],
    
  }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="pt"
      className={`${lexendSans.variable} ${interSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );  
}
