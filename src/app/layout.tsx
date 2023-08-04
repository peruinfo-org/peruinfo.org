
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ColorModeContextProvider } from '@/context/ThemeMode'

export const metadata: Metadata = {
  title: 'peruinfo',
  description: 'Peru Info un centro de datos e información sobre el Perú',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return 
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main> 
          <Footer />
        </div>
      </body>
    </html>
}
