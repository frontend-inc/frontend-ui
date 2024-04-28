import React, { useState } from 'react'
import { Button } from '@mui/material'

type CommentButtonProps = {
	reply?: boolean
	handleClick: () => void
}

const CommentButton: React.FC<CommentButtonProps> = (props) => {
	const { reply, handleClick } = props

	const handleToggleClick = () => {
		handleClick()
	}

	return (
		<Button variant='contained' color="secondary" onClick={handleToggleClick}>
			{reply ? 'Reply' : 'Leave a comment'}
		</Button>
	)
}

export default CommentButton

const sx = {
	icon: {
		fontSize: '28px',
	},
	selected: {
		color: 'primary.main',
	},
}