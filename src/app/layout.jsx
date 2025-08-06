import { RootLayout } from '@/components/RootLayout'
import { ThemeProvider } from '@/contexts/ThemeContext'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Tachyon Labs',
    default: 'Tachyon Labs - Building Superintelligence for Humanity',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full text-base antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white dark:bg-neutral-950 transition-colors">
        <ThemeProvider>
          <RootLayout>{children}</RootLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
