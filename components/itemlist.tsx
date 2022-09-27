import { useQueries } from '@tanstack/react-query'

export default function ItemList({ itemIds }: props) {
  const fetchItem = async (itemId: number) => {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`
    )
    const data = await res.json()
    return data
  }

  const storyData = useQueries({
    queries: itemIds.map((itemId) => ({
      queryKey: ['item', itemId],
      queryFn: () => fetchItem(itemId),
    })),
  })

  const allSuccess = storyData.every((story) => story.isSuccess === true)

  // TODO: Might be better to check for loading and then sort out the ones that might have errored
  if (!allSuccess) {
    return <p>Loading...</p>
  }

  console.log(storyData)

  return (
    <>
      {storyData.map((story) => (
        <p key={story.data.id}>{story.data.title}</p>
      ))}
    </>
  )
}

interface props {
  itemIds: number[]
}
