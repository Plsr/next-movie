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
  console.log(data)
  return data as ItemInterface
}

export const fetchCommentTree = async (
  rootId: number
): Promise<ICommentWithChildren> => {
  const rootItem = await fetchItem(rootId)

  if (!rootItem.kids || rootItem.kids.length === 0) {
    return {
      ...rootItem,
      children: [],
    }
  }

  const children = await Promise.all(
    rootItem.kids?.map(async (id) => await fetchCommentTree(id))
  )

  return {
    ...rootItem,
    children,
  }
}

export interface ICommentWithChildren extends ItemInterface {
  children?: ICommentWithChildren[] | [] | undefined
}
