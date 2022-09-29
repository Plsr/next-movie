import { ItemInterface } from '../util/types'
import Item from './item'

export default function ItemList({ items }: props) {
  console.log(items[0])
  return (
    <div className="divide-y divide-slate-200 divide-solid">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

interface props {
  items: ItemInterface[]
}
