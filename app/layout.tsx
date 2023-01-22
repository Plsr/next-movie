import { ReactNode } from 'react'
import SidebarContent from '../components/sidebar-content'
import '../styles/globals.css'

type RootLayoutProps = {
  children: ReactNode
}

export const revalidate = 60

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="flex h-screen">
            <div className="sticky h-full bg-slate-100 w-60">
              <SidebarContent />
            </div>
            <div className="h-full flex-1 px-8 overflow-scroll">{children}</div>
          </div>
        </main>
      </body>
    </html>
  )
}
