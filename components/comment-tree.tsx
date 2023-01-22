import { fetchCommentTree } from '../util/api'
import CommentWithChildren from './comment-with-children'

export default async function CommentTree({ itemId, depth = 0 }: props) {
  const commentTree = await fetchCommentTree(itemId)

  return (
    <>
      {commentTree &&
        commentTree.children?.map((childComment) => (
          <CommentWithChildren
            key={childComment.id}
            comment={childComment}
            level={0}
          />
        ))}
    </>
  )
}

interface props {
  depth?: number
  itemId: number
}
