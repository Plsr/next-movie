import { ItemInterface } from '../util/types'
import Item from './item'

export default function ItemList({ items }: props) {
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
