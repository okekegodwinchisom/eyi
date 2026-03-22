import './globals.css'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EYI - Eye Health Tracker',
  description: 'Track your eye health, schedule eye exams, and receive personalized eye care tips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">EYI</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/"><Button variant="ghost" className="text-white">Home</Button></Link></li>
                <li><Link href="/eye-health"><Button variant="ghost" className="text-white">Eye Health</Button></Link></li>
                <li><Link href="/exams"><Button variant="ghost" className="text-white">Exams</Button></Link></li>
                <li><Link href="/tips"><Button variant="ghost" className="text-white">Tips</Button></Link></li>
                <li><Link href="/login"><Button variant="ghost" className="text-white">Login</Button></Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-200 p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} EYI. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}