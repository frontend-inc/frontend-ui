import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { isLiked } from '../../../helpers'
import { useSocial, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

type LikeButtonProps = {
	resource: any
	size?: 'small' | 'large'
	color?: string
	numLikes?: number
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
	const { resource, color = 'text.secondary', size = 'small' } = props

	const { currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [liked, setLiked] = useState(false)

	const { like, unlike } = useSocial()

	const handleClick = async () => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (liked) {
			setLiked(false)
			await unlike(resource?.handle)
		} else {
			setLiked(true)
			await like(resource?.handle)
		}
	}

	useEffect(() => {
		if (currentUser && resource?.handle) {
			if (isLiked(currentUser, resource?.handle)) {
				setLiked(true)
			} else {
				setLiked(false)
			}
		}
	}, [currentUser, resource?.handle])

	return (
		<Box>
			<IconButton
				onClick={handleClick}
				sx={{
					color,
					'&:hover': {
						color,
					},
					...(size == 'small' ? sx.small : sx.large),
					...(liked && sx.selected),
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
	small: {},
	selected: {
		transition: 'transform 0.2s',
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
		borderColor: 'primary.main',
	},
	large: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
