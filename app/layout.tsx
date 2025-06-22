import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. APJ Abdul Kalam Tribute - The People's President",
  description: "A comprehensive tribute to Dr. APJ Abdul Kalam - India's Missile Man, People's President, and inspiring teacher. Explore his life, quotes, speeches, and legacy.",
  keywords: [
    "Dr. APJ Abdul Kalam",
    "APJ Abdul Kalam",
    "People's President",
    "Missile Man of India",
    "Indian President",
    "ISRO",
    "DRDO",
    "Wings of Fire",
    "Ignited Minds",
    "Indian scientist",
    "motivational speaker",
    "Bharat Ratna",
    "Indian space program",
    "missile development",
    "student inspiration",
    "Indian education",
    "presidential speeches",
    "Kalam quotes",
    "Indian leadership"
  ],
  authors: [{ name: "Dr. APJ Abdul Kalam Tribute Website" }],
  creator: "Dr. APJ Abdul Kalam Tribute Website",
  publisher: "Dr. APJ Abdul Kalam Tribute Website",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://v0-dr-kalam-tribute-site.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. APJ Abdul Kalam Tribute - The People's President",
    description: "A comprehensive tribute to Dr. APJ Abdul Kalam - India's Missile Man, People's President, and inspiring teacher. Explore his life, quotes, speeches, and legacy.",
    url: 'https://v0-dr-kalam-tribute-site.vercel.app/',
    siteName: 'Dr. APJ Abdul Kalam Tribute',
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. APJ Abdul Kalam - The People\'s President',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. APJ Abdul Kalam Tribute - The People's President",
    description: "A comprehensive tribute to Dr. APJ Abdul Kalam - India's Missile Man, People's President, and inspiring teacher.",
    images: ['https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
