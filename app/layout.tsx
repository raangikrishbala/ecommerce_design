import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Ecommerce Design',
  description: 'Converted Next.js App Router scaffold'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="container my-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
