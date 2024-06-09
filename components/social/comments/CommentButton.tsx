import React, { useState } from 'react'
import { Button } from '@mui/material'

type CommentButtonProps = {
	reply?: boolean
	handleClick: () => void
}

const CommentButton: React.FC<CommentButtonProps> = (props) => {
	const { reply, handleClick } = props

	return (
		<Button variant="contained" color="secondary" onClick={handleClick}>
			{reply ? 'Reply' : 'Leave a comment'}
		</Button>
	)
}

export default CommentButton
