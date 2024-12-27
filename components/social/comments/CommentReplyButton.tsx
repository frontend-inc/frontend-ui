'use client'

import React from 'react'
import { Button } from '../../../components'

type CommentReplyButtonProps = {
	reply?: boolean
	handleClick: () => void
}

const CommentReplyButton: React.FC<CommentReplyButtonProps> = (props) => {
	const { reply, handleClick } = props

	return (
		<Button
			variant="ghost"
			onClick={handleClick}
			className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
		>
			{reply ? 'Reply' : 'Leave a Comment'}
		</Button>
	)
}

export default CommentReplyButton
