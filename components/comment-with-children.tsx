import { useCallback, useMemo } from 'react'
import { ICommentWithChildren } from '../util/api'
import Comment from './comment'

export default function CommentWithChildren({ comment, level }: props) {
  const hasChildren = useMemo(() => {
    return comment.children && comment.children.length > 0
  }, [comment])

  if (comment.dead || comment.deleted) return null

  return (
    <>
      <Comment comment={comment} leftPad={level} />
      {hasChildren &&
        comment.children!.map((childComment) => (
          <CommentWithChildren
            key={childComment.id}
            comment={childComment}
            level={level + 1}
          />
        ))}
    </>
  )
}

type props = {
  comment: ICommentWithChildren
  level: number
}
