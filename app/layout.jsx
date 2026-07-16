import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = { title: 'Vibe Coder | Portfolio', description: 'Full-stack AI-native developer building premium web experiences.' }
export default function RootLayout({ children }) {
  return <html lang="en"><body className={`${inter.className} bg-black`}>{children}</body></html>
                                             }
