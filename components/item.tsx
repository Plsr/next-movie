import { ItemInterface } from '../util/types'
import { formatDistance, fromUnixTime } from 'date-fns'

export default function Item({ item }: props) {
  const host = new URL(item.url).hostname
  const date = formatDistance(fromUnixTime(item.time), new Date())
  return (
    <div className="py-6 flex flex-row items-center">
      <span className="pr-6">{item.score}</span>
      <div>
        <div className="mb-2">
          <span className="font-bold font-lg text-gray-700 mr-2">
            {item.title}
          </span>
          <a href={item.url} className="text-gray-400 hover:underline">
            ({host})
          </a>
        </div>
        <div>
          <span className="text-sm text-gray-500 mr-4">
            {item.kids?.length || 0} comments
          </span>
          <span className="text-sm text-gray-500 mr-4">{date} ago</span>
          <span className="text-sm text-gray-500">by: {item.by}</span>
        </div>
      </div>
    </div>
  )
}

interface props {
  item: ItemInterface
}
