import '@/assets/scss/style.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Redhalf Technologies',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'Best IT Service Provider',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{}</style>
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}
