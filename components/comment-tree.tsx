import { useQuery } from '@tanstack/react-query'
import { fetchCommentTree, fetchItem } from '../util/api'
import CommentWithChildren from './comment-with-children'

export default function CommentTree({ id, depth = 0 }: props) {
  const { data: commentTree, isLoading } = useQuery(['comment-tree', id], () =>
    fetchCommentTree(id)
  )

  if (isLoading || !commentTree) return <p>Loading comment...</p>

  return <CommentWithChildren comment={commentTree} level={0} />
}

interface props {
  id: number
  depth?: number
}
