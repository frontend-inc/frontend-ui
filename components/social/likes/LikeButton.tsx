import React, { useEffect, useState, useContext } from 'react'
import { Box, IconButton } from '@mui/material'
import { isLiked } from '../../../helpers'
import { useSocial } from '../../../hooks'
import { useAuth } from 'frontend-js'
import {  
  Favorite, 
  FavoriteBorder,    
} from '@mui/icons-material'
import { AppContext } from '../../../context'

type LikeButtonProps = {
	handle: string | number
	variant?: 'icon' | 'button'
	numLikes?: number
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
	const { handle, variant = 'icon', numLikes } = props

	const { currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

	const [liked, setLiked] = useState(false)

	const { loading, like, unlike } = useSocial({
		url: '/api/v1/social',
	})

	const handleClick = async (ev) => {
		ev.stopPropagation()
		ev.preventDefault()
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (liked) {
			setLiked(false)
			await unlike(handle)
		} else {
			setLiked(true)
			await like(handle)
		}
	}

	useEffect(() => {
		if (currentUser && handle) {
			if (isLiked(currentUser, handle)) {
				setLiked(true)
			} else {
				setLiked(false)
			}
		}
	}, [currentUser, handle])

	return(
  <Box>
    { variant == 'icon' ? (
		<IconButton
			onClick={handleClick}
			sx={{
				...sx.icon,
				...(liked && sx.iconLiked),
			}}
		>
      { liked ? 
			  <Favorite fontSize="small" /> : 
        <FavoriteBorder fontSize="small" />
      }
		</IconButton>
	) : (
		<IconButton
			onClick={handleClick}
			sx={{
				...sx.button,
				...(liked && sx.buttonLiked),
			}}
		>
			{ liked ? 
			  <Favorite fontSize="small" /> : 
        <FavoriteBorder fontSize="small" />
      }
		</IconButton>
    )}
  </Box>
	)
}

export default LikeButton

const sx = {
	icon: {
		color: 'text.secondary',
		'&:hover': {
			color: 'text.secondary',
		},
	},
	iconLiked: {
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
	},
	button: {
		transition: 'transform 0.2s',
		border: '1px solid',
		borderColor: 'divider',
		color: 'text.secondary',
		'&:hover': {
			color: 'text.secondary',
		},
	},
	buttonLiked: {
		borderColor: 'primary.main',
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
	},
}
