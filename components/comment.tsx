import { ItemInterface } from '../util/types'
import { createdAgo } from '../util/time'
import { useQuery } from '@tanstack/react-query'
import styles from './comment.module.css'
import CommentChildIndicator from './comment-child-indicator'
import { fetchItem } from '../util/api'

// TODO: Display children once they are fetched
export default function Comment({ comment }: props) {
  // TODO: Actually fetch all children, not just the first
  const {
    data: _data,
    isFetching: isFetchingChildren,
    refetch,
  } = useQuery(['item', comment.id], () => fetchItem(comment.kids![0]), {
    enabled: false,
    refetchOnWindowFocus: false,
  })

  const handleChildIndicatorClick = () => {
    refetch()
  }

  console.log(isFetchingChildren)

  return (
    <div className="mb-12 w-128" key={comment.id}>
      <span className="text-sm text-slate-500">
        {comment.by} - {createdAgo(comment.time)}
      </span>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: comment.text }}
      />
      <CommentChildIndicator
        onClick={handleChildIndicatorClick}
        childrenCount={comment.kids?.length || 0}
      />
      {isFetchingChildren && <p>Loading children..</p>}
    </div>
  )
}

interface props {
  comment: ItemInterface
}
