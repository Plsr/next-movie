import { ItemInterface } from '../util/types'
import { createdAgo } from '../util/time'
import styles from './comment.module.css'

export default function Comment({ comment, onLoadChildren, leftPad }: props) {
  return (
    <div
      style={{
        paddingLeft: `${40 * leftPad}px`,
      }}
      className="mb-12 w-128"
      key={comment.id}
    >
      <span className="text-sm text-slate-500">
        {comment.by} - {createdAgo(comment.time)}
      </span>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
    </div>
  )
}

interface props {
  comment: ItemInterface
  onLoadChildren: (parentId: number) => void
  leftPad: number
}
