'use client'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function SidebarContent() {
  const pathname = usePathname()

  // HACK: Move all of this into a component
  const activeLink = (path: string) => pathname === path
  const baseStyles = 'mt-2 p-2 flex-1 text-sm'
  const activeStyles =
    'bg-orange-200 text-orange-800 font-bold text-sm rounded-lg'

  return (
    <header className="flex h-full flex-col items-start justify-between text-slate-800 p-4">
      <h1 className="text-xl font-bold text-orange-600">Vioz</h1>
      <nav className="mt-8 w-full mb-auto">
        <ul className="flex flex-col">
          <li
            className={clsx(
              baseStyles,
              (activeLink('/') || activeLink('/top')) && activeStyles
            )}
          >
            <Link href="/" className="block">
              Top
            </Link>
          </li>
          <li className={clsx(baseStyles, activeLink('/new') && activeStyles)}>
            <Link href="/new" className="block">
              New
            </Link>
          </li>
          <li className={clsx(baseStyles, activeLink('/ask') && activeStyles)}>
            <Link href="/ask" className="block">
              Ask
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
