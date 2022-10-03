export default function CommentChildIndicator({ childrenCount }: props) {
  if (childrenCount === 0) return null

  const childrenString = childrenCount > 1 ? 'children' : 'child'

  return (
    <span className="cursor-pointer">
      {childrenCount} {childrenString}
    </span>
  )
}

interface props {
  childrenCount: number
}
