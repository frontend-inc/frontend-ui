import React from 'react'
import { Box, IconButton } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'

type CommentButtonProps = {
  color?: string
  handleClick: () => void
}

const CommentButton: React.FC<CommentButtonProps> = (props) => {
	const {
    color='text.secondary',
    handleClick,
	} = props

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
