import { ItemInterface } from '../util/types'
import { createdAgo } from '../util/time'

export default function Comment({ comment }: props) {
  return (
    <div className="mb-4" key={comment.id}>
      <span className="text-sm text-slate-500">
        {comment.by} - {createdAgo(comment.time)}
      </span>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      <span>{comment.kids?.length || 0} children</span>
    </div>
  )
}

interface props {
  comment: ItemInterface
}
