'use client'

import { useState, useMemo } from 'react'
import { ICommentWithChildren } from '../util/api'
import Comment from './comment'
import CommentHeader from './comment-header'

export default function CommentWithChildren({ comment, level }: props) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const hasChildren = useMemo(() => {
    return comment.children && comment.children.length > 0
  }, [comment])

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  if (comment.dead || comment.deleted) return null

  if (isCollapsed) {
    return (
      <div className="mb-12">
        <CommentHeader
          username={comment.by}
          createdAtEpoch={comment.time}
          isCollapsed={true}
          onCollapseClick={handleCollapse}
          level={level}
        />
      </div>
    )
  }

  return (
    <>
      <Comment
        comment={comment}
        leftPad={level}
        {...(hasChildren && { onCollapseClick: handleCollapse })}
      />
      {hasChildren &&
        comment.children!.map((childComment) => (
          <CommentWithChildren
            key={childComment.id}
            comment={childComment}
            level={level + 1}
          />
        ))}
    </>
  )
}

type props = {
  comment: ICommentWithChildren
  level: number
}
