import type { Metadata } from 'next'
import { Aldrich, Inter } from 'next/font/google'
import './globals.css'

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aldrich',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TokPay — Cross-Border Financial Infrastructure',
  description:
    'TokPay helps businesses, banks, fintechs, and exchanges move money globally, access liquidity, and enable digital asset workflows through modern settlement infrastructure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${aldrich.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
