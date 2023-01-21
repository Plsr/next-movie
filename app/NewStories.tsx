'use client'

import type { NextPage } from 'next'
import CategoryPage from '../components/category-page'
import { fetchNewStories } from '../util/api'

const New: NextPage = () => {
  return <CategoryPage fetchFunction={fetchNewStories} />
}

export default New
