import './globals.css'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '../components/ThemeToggle'
import TopNavBar from '../components/TopNavBar'
import BottomNavBar from '../components/BottomNavBar'

export const metadata = {
  title: 'GitHub Code Viewer',
  description: 'View GitHub repository files with syntax highlighting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-200 font-sans transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ThemeToggle />
          <TopNavBar />
          {children}
          <BottomNavBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
