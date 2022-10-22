import type { NextPage } from 'next'
import CategoryPage from '../components/category-page'
import { fetchAskStories } from '../util/api'

const Ask: NextPage = () => {
  return <CategoryPage fetchFunction={fetchAskStories} />
}

export default Ask
