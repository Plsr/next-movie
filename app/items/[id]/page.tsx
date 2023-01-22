import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import CommentTree from '../../../components/comment-tree'
import { ItemSingle } from '../../../components/item-single'

type ItemPageProps = {
  params: {
    id: string
  }
}

export default async function ItemPage({ params }: ItemPageProps) {
  const itemId = +params?.id

  if (!itemId) notFound()

  return (
    <div className="p-2">
      <Suspense fallback="Loading item...">
        {/* @ts-expect-error */}
        <ItemSingle itemId={itemId} />
      </Suspense>
      <Suspense fallback="Loading comments....">
        {/* @ts-expect-error */}
        <CommentTree itemId={itemId} />
      </Suspense>
    </div>
  )
}
