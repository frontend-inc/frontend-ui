import React from 'react'
import { CommentButton } from '../..'

type ReplyButtonProps = {
	handleClick: (liked: boolean) => void
}

const ReplyButton: React.FC<ReplyButtonProps> = (props) => {
	const { handleClick } = props

	return <CommentButton handleClick={handleClick} />
}

export default ReplyButton

const sx = {
	icon: {
		fontSize: '28px',
	},
	selected: {
		color: 'primary.main',
	},
}