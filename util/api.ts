import { ItemInterface } from './types'

export const fetchTopStories = async (): Promise<number[]> => {
  const res = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  )
  const data = await res.json()
  return data
}

export const fetchItem = async (itemId: number): Promise<ItemInterface> => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
  )
  const data = await res.json()
  return data as ItemInterface
}
