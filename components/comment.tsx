import { ItemInterface } from '../util/types'
import { createdAgo } from '../util/time'
import styles from './comment.module.css'
import CommentHeader from './comment-header'

export default function Comment({ comment, leftPad, onCollapseClick }: props) {
  return (
    <div
      style={{
        paddingLeft: `${40 * leftPad}px`,
      }}
      className="mb-12 w-128"
      key={comment.id}
    >
      <CommentHeader
        username={comment.by}
        createdAtEpoch={comment.time}
        isCollapsed={false}
        onCollapseClick={onCollapseClick}
      />
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
    </div>
  )
}

interface props {
  comment: ItemInterface
  leftPad: number
  onCollapseClick?: () => void
}
