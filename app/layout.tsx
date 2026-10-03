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
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
    shortcut: '/icon.png',
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
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
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
