import Link from 'next/link'

export default function ItemTitle({ id, title, url, linkable = false }: props) {
  const host = url && new URL(url).hostname // Stories do not have a url
  const titleClasses = 'font-bold text-lg text-gray-700 mr-2'

  return (
    <>
      {linkable && (
        <Link href={'items/' + id} className={titleClasses}>
          {title}
        </Link>
      )}
      {!linkable && <span className={titleClasses}>{title}</span>}
      {host && (
        <a href={url} className="text-gray-400 hover:underline">
          ({host})
        </a>
      )}
    </>
  )
}

interface props {
  linkable: boolean
  id: number
  title: string
  url: string
}
