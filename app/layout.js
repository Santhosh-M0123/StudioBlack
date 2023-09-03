import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight : ["400","500","600"],subsets: ['latin'] })

export const metadata = {
  title: 'Studio black',
  description: 'Shine like a model',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
