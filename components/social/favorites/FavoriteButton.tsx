import React, { useEffect, useState, useContext } from 'react'
import { IconButton } from '@mui/material'
import { isFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial } from '../../../hooks'
import { AppContext } from '../../../context'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

type FavoriteButtonProps = {
	handle: string 
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
	const { handle } = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

	const [isFavorite, setIsFavorite] = useState(false)

	const { 
    loading, 
    favorite, 
    unfavorite 
  } = useSocial({
    url: '/api/v1/social' 
  })

	const handleClick = async (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
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
		<IconButton
      size="small"
			onClick={handleClick}
			sx={{
				...sx.icon,
				...(isFavorite && sx.isFavorite),
			}}
		>
      { isFavorite ? 
        <Favorite /> : 
        <FavoriteBorder />
      }			
		</IconButton>
	)
}

export default FavoriteButton

const sx = {
	icon: {
		color: 'text.secondary',
		'&:hover': {
			color: 'text.secondary',
		},
	},
	isFavorite: {
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
	},
}
