import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarTop from "@/components/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Palace Poker Szombathely',
  description: 'Szombathely, Póker, Poker, Cash game, Versenyek',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <NavbarTop/>
    {children}
    <Footer/>
    </body>
    </html>
  )
}
