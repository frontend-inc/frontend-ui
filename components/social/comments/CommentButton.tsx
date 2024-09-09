import React from 'react'
import { useResourceContext } from 'frontend-js'
import { Box, IconButton } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'

type CommentButtonProps = {
	resource: any
	size?: 'small' | 'large'
	color?: string
}

const CommentButton: React.FC<CommentButtonProps> = (props) => {
	const { resource, size = 'small', color = 'text.secondary' } = props

	const { openShow, setOpenShow, setResource } = useResourceContext()

	const handleClick = () => {
		setResource(resource)
		setOpenShow(!openShow)
	}

	return (
		<Box>
			<IconButton
				onClick={handleClick}
				sx={{
					...sx.icon,
					...(size == 'large' && sx.large),
					color,
					'&:hover': {
						color,
					},
				}}
			>
				<ChatBubbleOutline fontSize="small" />
			</IconButton>
		</Box>
	)
}

export default CommentButton

const sx = {
	icon: {
		bgcolor: 'background.main',
		color: 'text.secondary',
		'&:hover': {
			bgcolor: 'background.main',
			color: 'text.secondary',
		},
	},
	large: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
