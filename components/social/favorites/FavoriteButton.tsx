import React, { useEffect, useState, useContext } from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../..'
import { isFavorited } from '../../../helpers'
import { useAuth, useAlerts, useSocial } from 'frontend-js'
import { AppContext } from '../../../context'

type FavoriteButtonProps = {
	url: string
	handle: string | number
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
	const { url, handle } = props

	const { currentUser } = useAuth()
	const { authOpen, setAuthOpen } = useContext(AppContext)

	const [favorited, setFavorited] = useState(false)

	const { loading, favorite, unfavorite } = useSocial({
		url,
	})

	const { showAlertError } = useAlerts()

	const handleClick = async () => {
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
			onClick={handleClick}
			sx={{
				...sx.icon,
				...(favorited && sx.favorited),
			}}
		>
			<Icon
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