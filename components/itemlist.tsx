import { ItemInterface } from '../util/types'
import Item from './item'

export default function ItemList({ items }: props) {
  console.log(items[0])
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  )
}

interface props {
  items: ItemInterface[]
}
