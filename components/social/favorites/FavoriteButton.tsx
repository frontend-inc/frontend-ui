import React, { useEffect, useState, useContext } from 'react'
import { Box, IconButton } from '@mui/material'
import { isFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial } from '../../../hooks'
import { AppContext } from '../../../context'
import { 
  Bookmark,
  BookmarkBorder, 
} from '@mui/icons-material'

type FavoriteButtonProps = {
	handle: string
	variant?: 'icon' | 'button'
	color?: string
	numFavorites?: number
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
	const {
		handle,
		variant = 'icon',
		color = 'text.secondary',
		numFavorites,
	} = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

	const [isFavorite, setIsFavorite] = useState(false)

	const { loading, favorite, unfavorite } = useSocial({
		url: '/api/v1/social',
	})

	const handleClick = async (ev) => {
		ev.stopPropagation()
		ev.preventDefault()
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (isFavorite) {
			setIsFavorite(false)
			await unfavorite(handle)
			fetchMe()
		} else {
			setIsFavorite(true)
			await favorite(handle)
			fetchMe()
		}
	}

	useEffect(() => {
		if (currentUser && handle) {
			if (isFavorited(currentUser, handle)) {
				setIsFavorite(true)
			} else {
				setIsFavorite(false)
			}
		}
	}, [currentUser, handle])

	return (
		<Box>
			{variant == 'icon' ? (
				<IconButton
					onClick={handleClick}
					sx={{
						color,
						'&:hover': {
							color,
						},
						...sx.icon,
						...(isFavorite && sx.iconFavorited),
					}}
				>
					{isFavorite ? (
						<Bookmark fontSize="small" />
					) : (
						<BookmarkBorder fontSize="small" />
					)}
				</IconButton>
			) : (
				<IconButton
					sx={{
						...sx.button,
						...(isFavorite && sx.buttonFavorited),
					}}
					onClick={handleClick}
				>
					{isFavorite ? (
						<Bookmark fontSize="small" />
					) : (
						<BookmarkBorder fontSize="small" />
					)}
				</IconButton>
			)}
		</Box>
	)
}

export default FavoriteButton

const sx = {
	icon: {},
	iconFavorited: {
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
	},
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
	buttonFavorited: {
		borderColor: 'primary.main',
		color: 'primary.main',
		'&:hover': {
			color: 'primary.main',
		},
	},
}
