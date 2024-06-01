import React, { useEffect, useState, useContext } from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../..'
import { isFavorited } from '../../../helpers'
import { ApiContext, useAuth } from 'frontend-js'
import { useSocial } from '../../../hooks'
import { AppContext } from '../../../context'

type FavoriteButtonProps = {
	handle: string 
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
	const { handle } = props

	const { currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

	const [favorited, setFavorited] = useState(false)

	const { 
    loading, 
    favorite, 
    unfavorite 
  } = useSocial({
    url: '/api/v1/social' 
  })

	const handleClick = async (ev) => {
    ev.preventDefault();
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (favorited) {
			setFavorited(false)
			await unfavorite(handle)
		} else {
			setFavorited(true)
			await favorite(handle)
		}
	}

	useEffect(() => {
		if (currentUser && handle) {
			if (isFavorited(currentUser, handle)) {
				setFavorited(true)
			} else {
				setFavorited(false)
			}
		}
	}, [currentUser, handle])

	return (
		<IconButton
      size="small"
			onClick={handleClick}
			sx={{
				...sx.icon,
				...(favorited && sx.favorited),
			}}
		>
			<Icon
        size={20}
				name="Heart"
				color={favorited ? 'primary.contrastText' : 'text.primary'}
			/>
		</IconButton>
	)
}

export default FavoriteButton

const sx = {
	icon: {
		bgcolor: 'grey.100',
		'&:hover': {
			bgcolor: 'grey.300',
		},
	},
	favorited: {
		bgcolor: 'primary.main',
		'&:hover': {
			bgcolor: 'primary.dark',
		},
	},
}
