import { useCallback } from 'react'
import { createdAgo } from '../util/time'

export default function CommentHeader({
  username,
  createdAtEpoch,
  isCollapsed = false,
  onCollapseClick,
  level = 0,
}: props) {
  const handleCollapseClick = () => {
    onCollapseClick && onCollapseClick()
  }

  const leftpad = useCallback(() => `${level * 40}px`, [level])

  return (
    <div style={{ paddingLeft: leftpad() }} className="text-sm text-slate-500">
      <span>
        {username} - {createdAgo(createdAtEpoch)}
      </span>
      {onCollapseClick && (
        <span className="ml-2 cursor-pointer" onClick={handleCollapseClick}>
          [ {isCollapsed ? '+' : '-'} ]
        </span>
      )}
    </div>
  )
}

type props = {
  username: string
  createdAtEpoch: number
  isCollapsed?: boolean
  onCollapseClick?: () => void
  level?: number
}
