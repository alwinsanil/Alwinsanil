import './globals.css'
import type { Metadata } from 'next'
import { Montserrat} from 'next/font/google'

const roboto = Montserrat({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alwin Sanil | Developer',
  description: 'The Portfolio of Alwin Sanil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
