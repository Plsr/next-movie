import { useRouter } from 'next/router'
import { useQuery, useQueries } from '@tanstack/react-query'
import { fetchItem } from '../../util/api'
import ItemTitle from '../../components/item-title'
import { createdAgo } from '../../util/time'
import Layout from '../../components/layout'
import Comment from '../../components/comment'
import { ItemInterface } from '../../util/types'

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

  const commentsQueryResults = useQueries({
    queries:
      item?.kids?.map((itemId) => ({
        queryKey: ['item', itemId],
        queryFn: () => fetchItem(itemId),
        enabled: !!item,
      })) || [],
  })

  const commentsData = commentsQueryResults
    .filter(({ data: commentData }) => commentData != undefined)
    .map((r) => r.data as ItemInterface)

  const aliveComments = (comments: ItemInterface[]): ItemInterface[] => {
    return comments.filter((comment) => !comment.dead)
  }

  if (isLoadingItem) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  }

  if (isError || !item) {
    if (error instanceof Error) return <p>{error.message}</p>
    return <p>Something went wrong</p>
  }

  return (
    <Layout>
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
        <h2 className="text-md mt-12 mb-4 font-bold">
          Comments ({item.kids.length})
        </h2>
        {commentsData &&
          aliveComments(commentsData).map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </Layout>
  )
}
