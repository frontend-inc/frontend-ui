import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { isFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial, useApp } from '../../../hooks'
import { Bookmark, BookmarkBorder } from '@mui/icons-material'

type FavoriteButtonProps = {
	resource: any
	size?: 'small' | 'large'
	color?: string
	numFavorites?: number
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
	const {
		resource,
		size = 'small',
		color = 'text.secondary',
		numFavorites,
	} = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [isFavorite, setIsFavorite] = useState(false)

	const { favorite, unfavorite } = useSocial()

	const handleClick = async (ev) => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (isFavorite) {
			setIsFavorite(false)
			await unfavorite(resource?.handle)
			fetchMe()
		} else {
			setIsFavorite(true)
			await favorite(resource?.handle)
			fetchMe()
		}
	}

	useEffect(() => {
		if (currentUser && resource?.handle) {
			if (isFavorited(currentUser, resource?.handle)) {
				setIsFavorite(true)
			} else {
				setIsFavorite(false)
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
					...(size === 'small' ? sx.small : sx.large),
					...(isFavorite && sx.selected),
				}}
			>
				{isFavorite ? (
					<Bookmark fontSize="small" />
				) : (
					<BookmarkBorder fontSize="small" />
				)}
			</IconButton>
		</Box>
	)
}

export default FavoriteButton

const sx = {
	small: {},
	selected: {
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
		borderColor: 'primary.main',
	},
	large: {
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
