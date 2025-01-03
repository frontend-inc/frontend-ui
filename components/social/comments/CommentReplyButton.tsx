'use client'

import React from 'react'
import { Button } from '@nextui-org/react'

type CommentReplyButtonProps = {
	reply?: boolean
	handleClick: () => void
}

const CommentReplyButton: React.FC<CommentReplyButtonProps> = (props) => {
	const { reply, handleClick } = props

	return (
		<Button variant="ghost" onPress={handleClick}>
			{reply ? 'Reply' : 'Leave a Comment'}
		</Button>
	)
}

export default CommentReplyButton
