import { Header, Footer } from "@/components/layout/marketing";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <Header />

      <main className="w-full flex-1">
        {children}
      </main>

      <Footer />
    </>
  );  
}
