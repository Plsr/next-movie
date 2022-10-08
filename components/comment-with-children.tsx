import { ICommentWithChildren } from '../util/api'
import Comment from './comment'

export default function CommentWithChildren({ comment, level }: props) {
  if (comment.dead || comment.deleted) return null

  return (
    <>
      <Comment comment={comment} leftPad={level} />
      {comment.children &&
        comment.children.length > 0 &&
        comment.children.map((childComment) => (
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
