import { Inter, Lexend } from 'next/font/google'
import SupabaseProvider from './supabase-provider';
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

// import { cleanProps } from 'react-dom';

export const metadata: Metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { 'monica-version': version, 'monica-id': id, ...rest } = cleanProps(props);
  return (
    <html
      // {...rest}
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
      <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  )
}
