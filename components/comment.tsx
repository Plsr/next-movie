import { ItemInterface } from '../util/types'
import { createdAgo } from '../util/time'
import styles from './comment.module.css'
import CommentChildIndicator from './comment-child-indicator'

export default function Comment({ comment }: props) {
  return (
    <div className="mb-12 w-128" key={comment.id}>
      <span className="text-sm text-slate-500">
        {comment.by} - {createdAgo(comment.time)}
      </span>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
      <CommentChildIndicator childrenCount={comment.kids?.length || 0} />
    </div>
  )
}

interface props {
  comment: ItemInterface
}
