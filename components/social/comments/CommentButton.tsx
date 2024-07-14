import React, { useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { Box, IconButton } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'

type CommentButtonProps = {
	resource: any
	color?: string
}

const CommentButton: React.FC<CommentButtonProps> = (props) => {
	const { resource, color = 'text.secondary' } = props

	const { openShow, setOpenShow, setResource } = useContext(
		ResourceContext
	) as any

	const handleClick = () => {
		setResource(resource)
		setOpenShow(!openShow)
	}

	return (
		<Box>
			<IconButton
				onClick={handleClick}
				sx={{
					color,
					'&:hover': {
						color,
					},
					...sx.icon,
				}}
			>
				<ChatBubbleOutline fontSize="small" />
			</IconButton>
		</Box>
	)
}

export default CommentButton

const sx = {
	icon: {},
	button: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.main',
		color: 'text.secondary',
		'&:hover': {
			bgcolor: 'background.main',
			color: 'text.secondary',
		},
	},
}
