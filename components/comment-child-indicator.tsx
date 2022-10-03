export default function CommentChildIndicator({
  childrenCount,
  onClick,
}: props) {
  if (childrenCount === 0) return null

  const childrenString = childrenCount > 1 ? 'children' : 'child'

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {childrenCount} {childrenString}
    </span>
  )
}

interface props {
  childrenCount: number
  onClick: () => void
}
