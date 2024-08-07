import React, { useState, useEffect } from 'react'
import { Box, IconButton } from '@mui/material'
import { MessageCircle, Send } from 'lucide-react'
import { FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material'
import { isFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'

type SocialCardButtonsProps = {
	item: any
	handleFavorite: (item: any) => void
	handleShare: (item: any) => void
	handleComment: (item: any) => void
	isFavoriteFn?: (user: any, item: any) => boolean
}

const SocialCardButtons: React.FC<SocialCardButtonsProps> = (props) => {
	const {
		item,
		handleFavorite,
		handleComment,
		handleShare,
		isFavoriteFn = isFavorited,
	} = props

	const { currentUser } = useAuth()
	const [isFavorite, setIsFavorite] = useState(false)

	const handleFavoriteClick = (item) => {
		setIsFavorite(!isFavorite)
		handleFavorite(item)
	}

	useEffect(() => {
		if (item) {
			if (isFavoriteFn(currentUser, item?.id)) {
				setIsFavorite(true)
			} else {
				setIsFavorite(false)
			}
		}
	}, [currentUser, item])

	return (
		<Box>
			<IconButton size="small" onClick={() => handleFavoriteClick(item)}>
				{isFavorite ? (
					<FavoriteOutlined sx={sx.favorite} />
				) : (
					<FavoriteBorderOutlined />
				)}
			</IconButton>
			<IconButton size="small" onClick={() => handleComment(item)}>
				<MessageCircle size={24} />
			</IconButton>
			<IconButton size="small" onClick={() => handleShare(item)}>
				<Send size={24} />
			</IconButton>
		</Box>
	)
}

export default SocialCardButtons

const sx = {
	buttons: {
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	favorite: {
		color: 'error.main',
	},
}
