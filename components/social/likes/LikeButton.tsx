import React, { useEffect, useState, useContext } from 'react'
import { IconButton } from '@mui/material'
import { isLiked } from '../../../helpers'
import { useAlerts, useSocial } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Icon } from '../..'
import { AppContext } from '../../../context'

type LikeButtonProps = {
	url: string
	handle: string | number
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {
	const { url, handle } = props

	const { currentUser } = useAuth()
	const { authOpen, setAuthOpen } = useContext(AppContext)

	const [liked, setLiked] = useState(false)

	const { loading, like, unlike } = useSocial({
		url,
	})

	const handleClick = async () => {
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
		<IconButton
			onClick={handleClick}
			sx={{
				...sx.icon,
				...(liked && sx.liked),
			}}
		>
			<Icon
				name="ThumbsUp"
				color={liked ? 'primary.contrastText' : 'text.primary'}
			/>
		</IconButton>
	)
}

export default LikeButton

const sx = {
	icon: {
		bgcolor: 'grey.100',
		'&:hover': {
			bgcolor: 'grey.300',
		},
	},
	liked: {
		bgcolor: 'primary.main',
		color: 'white',
		'&:hover': {
			bgcolor: 'primary.dark',
		},
	},
}
