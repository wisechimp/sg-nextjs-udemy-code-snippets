import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code Snippets',
  description: 'A site for curating a collection of interesting and useful code snippets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container mx-auto px-12'>{children}</div>
      </body>
    </html>
  )
}
