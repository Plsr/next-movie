import { fetchItem } from '../util/api'
import { createdAgo } from '../util/time'
import ItemTitle from './item-title'

type ItemSingleProps = {
  itemId: number
}
export const ItemSingle = async ({ itemId }: ItemSingleProps) => {
  const item = await fetchItem(itemId)

  return (
    <div>
      <ItemTitle
        id={item.id}
        url={item.url}
        title={item.title}
        linkable={false}
      />
      <div className="text-slate-500 text-xs">
        <span>by {item.by}</span>
        <span> {createdAgo(item.time)}</span>
      </div>
      {item.text && (
        <div
          className="mt-2 w-128"
          dangerouslySetInnerHTML={{ __html: item.text }}
        />
      )}
      <h2 className="block text-md font-bold mt-8 mb-2">
        Comments ({item.descendants})
      </h2>
    </div>
  )
}
