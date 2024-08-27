import React, { useEffect, useState, useContext } from 'react'
import { Box, IconButton } from '@mui/material'
import { isLiked } from '../../../helpers'
import { useSocial } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { AppContext } from '../../../context'

type LikeButtonProps = {
	handle: string | number
	variant?: 'icon' | 'button'
	color?: string
	numLikes?: number
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
	const { handle, color = 'text.secondary', variant = 'icon', numLikes } = props

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

	return (
		<Box>
			<IconButton
				onClick={handleClick}
				sx={{
					color,
					'&:hover': {
						color,
					},
					...(variant == 'icon' ? sx.icon : sx.button),
					...(liked && sx.liked),
					...(liked && variant == 'button' && sx.buttonLiked),
				}}
			>
				{liked ? (
					<Favorite fontSize="small" />
				) : (
					<FavoriteBorder fontSize="small" />
				)}
			</IconButton>
		</Box>
	)
}

export default LikeButton

const sx = {
	icon: {},
	liked: {
		transition: 'transform 0.2s',
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
	},
	button: {
		border: '1px solid',
		borderColor: 'divider',
	},
	buttonLiked: {
		borderColor: 'primary.main',
	},
}
