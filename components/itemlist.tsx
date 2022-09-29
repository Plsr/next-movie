import { ItemInterface } from '../pages'

export default function ItemList({ items }: props) {
  return (
    <div className="divide-y divide-slate-200 divide-solid">
      {items.map((item) => (
        <div key={item.id} className="py-6">
          <p>
            <span className="pr-2">({item.score})</span>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  )
}

interface props {
  items: ItemInterface[]
}
