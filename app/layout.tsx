import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://labs.web3spell.fun'),
  title: 'web3spell labs',
  description: 'Web3Spell Labs is an independent product engineering and developer ecosystem studio building across zero-knowledge, smart contract systems, and onchain products.',
  generator: 'Web3Spell Labs',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'web3spell labs',
    description: 'Independent Web3 product engineering, smart contract architecture, and developer relations studio.',
    url: 'https://labs.web3spell.fun',
    siteName: 'web3spell labs',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090b0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
