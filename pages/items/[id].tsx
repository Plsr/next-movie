import { useRouter } from 'next/router'
import { useQuery, useQueries } from '@tanstack/react-query'
import { fetchItem } from '../../util/api'
import ItemTitle from '../../components/item-title'
import { createdAgo } from '../../util/time'

/** TODO:
 * - Move comment to distinct component
 * - Plural/Singular for children
 * - Hide children thing if no children present
 * - Hide 'dead' comments
 * - Load children on click
 */
export default function Item({}) {
  const router = useRouter()
  const { id: itemId } = router.query

  const {
    isLoading: isLoadingItem,
    isError,
    error,
    data: item,
  } = useQuery(['item', itemId], () => fetchItem(+itemId!))

  const commentData = useQueries({
    queries:
      item?.kids?.map((itemId) => ({
        queryKey: ['item', itemId],
        queryFn: () => fetchItem(itemId),
        enabled: !!item,
      })) || [],
  })

  const allCommentsSuccess =
    commentData && commentData.every((comment) => comment.isSuccess === true)

  if (isLoadingItem) return <p>Loading...</p>

  if (isError || !item) {
    if (error instanceof Error) return <p>{error.message}</p>
    return <p>Something went wrong</p>
  }

  return (
    <div className="p-2">
      <ItemTitle
        id={item.id}
        url={item.url}
        title={item.title}
        linkable={false}
      />
      <div className="text-slate-500 text-xs">
        <span>by {item.by}</span>
        <span> {createdAgo(item.time)}</span>
      </div>
      <h2 className="text-md mt-3 font-bold">Comments ({item.kids.length})</h2>
      {allCommentsSuccess &&
        commentData.map((comment) => (
          <div className="mb-4" key={comment.data!.id}>
            <span className="text-sm text-slate-500">
              {comment.data!.by} - {createdAgo(comment.data!.time)}
            </span>
            <p dangerouslySetInnerHTML={{ __html: comment.data!.text }} />
            <span>{comment.data!.kids?.length || 0} children</span>
          </div>
        ))}
    </div>
  )
}
