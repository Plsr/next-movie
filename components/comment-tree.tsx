import { useQuery } from '@tanstack/react-query'
import { fetchItem } from '../util/api'
import Comment from './comment'

/**
 * Would it be better to pass an array of ids in here? This way, a bunch of comments
 * of the same level would be able to load and then the next level could load in after
 * that.
 * With the current architecture, I don't really see a reason for this being a distinct
 * component, could just be handled in the <Comment /> component.
 */
export default function CommentTree({ id, depth = 0 }: props) {
  const { data, isLoading, isError } = useQuery(['item', id], () =>
    fetchItem(id)
  )

  if (isLoading) return <p>Loading comment...</p>

  if (isError || data.dead) return null

  return (
    <>
      <Comment
        comment={data!}
        onLoadChildren={() => console.log('nope')}
        leftPad={depth}
      />
      {data.kids?.map((kid) => (
        <CommentTree key={kid} id={kid} depth={depth + 1} />
      ))}
    </>
  )
}

interface props {
  id: number
  depth?: number
}
