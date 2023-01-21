import type { NextPage } from 'next'
import CategoryPage from '../components/category-page'
import { fetchTopStories } from '../util/api'

const Home: NextPage = () => {
  return <CategoryPage fetchFunction={fetchTopStories} />
}

export default Home
