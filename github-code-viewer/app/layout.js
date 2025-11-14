import './globals.css'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from '../components/ThemeToggle'
import TopNavBar from '../components/TopNavBar'
import BottomNavBar from '../components/BottomNavBar'
import { Analytics } from '@vercel/analytics/react'

// =========================
//   SEO METADATA
// =========================
export const metadata = {
  title: "DSA Programming Challenges – Python & Java",
  description:
    "Interactive DSA learning roadmap covering algorithms, data structures, and OOP in Python & Java.",
  keywords: [
    "DSA",
    "Data Structures",
    "Algorithms",
    "Python",
    "Java",
    "Programming Challenges",
    "Coding Roadmap"
  ],
  authors: [{ name: "Ritikesh Machhewar" }],
  metadataBase: new URL("https://dsa-programming-challenges-python-j.vercel.app"),
  alternates: {
    canonical: "https://dsa-programming-challenges-python-j.vercel.app",
  },
  openGraph: {
    title: "DSA Programming Challenges – Python & Java",
    description:
      "Explore a structured DSA roadmap with Python & Java implementations, clear explanations, and clean code.",
    url: "https://dsa-programming-challenges-python-j.vercel.app",
    siteName: "DSA Challenges",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DSA Programming Challenges Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

// =========================
//   ROOT LAYOUT
// =========================
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-200 font-sans transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ThemeToggle />
          <TopNavBar />
          {children}
          <BottomNavBar />

          {/* Vercel Analytics */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
