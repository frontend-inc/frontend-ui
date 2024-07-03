import React, { useContext } from 'react'
import { Box, IconButton } from '@mui/material'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'
import { ChatBubbleOutline } from '@mui/icons-material'

type CommentButtonProps = {
	handle: string
  color?: string
  handleClick: () => void
}

const CommentButton: React.FC<CommentButtonProps> = (props) => {
	const {
		handle,
    color='text.secondary',
    handleClick,
	} = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

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
