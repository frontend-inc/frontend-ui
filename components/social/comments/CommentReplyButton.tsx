import React from 'react'
import { Button } from '@mui/material'

type CommentReplyButtonProps = {
	reply?: boolean
	handleClick: () => void
}

const CommentReplyButton: React.FC<CommentReplyButtonProps> = (props) => {
	const { reply, handleClick } = props

	return (
		<Button variant="contained" color="secondary" onClick={handleClick}>
			{reply ? 'Reply' : 'Leave a comment'}
		</Button>
	)
}

export default CommentReplyButton
