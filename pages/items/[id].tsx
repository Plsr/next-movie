import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { fetchItem } from '../../util/api'
import ItemTitle from '../../components/item-title'
import { createdAgo } from '../../util/time'
import Layout from '../../components/layout'
import CommentTree from '../../components/comment-tree'

export default function Item({}) {
  const router = useRouter()
  const { id: itemId } = router.query

  const {
    isLoading: isLoadingItem,
    isError,
    error,
    data: item,
  } = useQuery(['item', itemId], () => fetchItem(+itemId!))

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
        {item.text && (
          <div
            className="mt-2 w-128"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        )}
        <h2 className="text-md mt-12 mb-4 font-bold">
          Comments ({item.descendants})
        </h2>
        {item.kids?.map((comment) => (
          <CommentTree key={comment} id={comment} />
        ))}
      </div>
    </Layout>
  )
}
