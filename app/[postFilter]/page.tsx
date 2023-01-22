import { notFound } from 'next/navigation'
import ItemList from '../../components/itemlist'
import { fetchItems, fetchStories, storyRoutes } from '../../util/api'

type PostListPageProps = {
  params: {
    postFilter: string
  }
}

const postTypes = ['new', 'top', 'ask']
type PostTypes = typeof postTypes
type PostType = PostTypes[number]

const isValidPostType = (postType: string): postType is PostType => {
  return postTypes.includes(postType)
}

export default async function PostListPage({ params }: PostListPageProps) {
  const { postFilter } = params

  if (!isValidPostType(postFilter)) notFound()

  const newStories = await fetchStories(
    storyRoutes[postFilter as keyof typeof storyRoutes]
  )
  const fullStories = await fetchItems(newStories.slice(0, 10))

  return <ItemList items={fullStories} />
}
