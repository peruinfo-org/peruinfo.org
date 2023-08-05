
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { cookies } from 'next/headers'


const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'peruinfo',
  description: 'Peru Info un centro de datos e información sobre el Perú',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = cookies()
  const mode = cookieStore.get('_m')?.value

  return  <html lang="es" className={mode}>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow py-8">{children}</main> 
          <Footer />
        </div>
      </body>
    </html>
}
