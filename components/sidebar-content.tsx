import { clsx } from 'clsx'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SidebarContent() {
  const router = useRouter()

  // HACK: Move all of this into a component
  const activeLink = (path: string) => router.pathname === path
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
            <Link href="/">
              <a className="block">Top</a>
            </Link>
          </li>
          <li className={clsx(baseStyles, activeLink('/new') && activeStyles)}>
            <Link href="/new">
              <a className="block">New</a>
            </Link>
          </li>
          <li className={clsx(baseStyles, activeLink('/ask') && activeStyles)}>
            <Link href="/ask">
              <a className="block">Ask</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
