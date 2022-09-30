import { ItemInterface } from '../util/types'
import { createdAgo } from '../util/time'
import Link from 'next/link'
import ItemTitle from './item-title'

export default function Item({ item }: props) {
  return (
    <div className="py-8 flex flex-row items-center">
      <span className="text-center pr-4 w-20">{item.score}</span>
      <div>
        <div className="mb-2">
          <ItemTitle id={item.id} title={item.title} url={item.url} linkable />
        </div>
        <div>
          <Link href={'items/' + item.id}>
            <a className="text-sm text-gray-500 mr-4">
              {item.kids?.length || 0} comments
            </a>
          </Link>
          <span className="text-sm text-gray-500 mr-4">
            {createdAgo(item.time)}
          </span>
          <span className="text-sm text-gray-500">by: {item.by}</span>
        </div>
      </div>
    </div>
  )
}

interface props {
  item: ItemInterface
}
