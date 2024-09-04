import React, { useEffect, useState, useContext } from 'react'
import { Button } from '@mui/material'
import { isFollowing } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial } from '../../../hooks'
import { AppContext } from '../../../context'
import { UserType } from 'frontend-js'

type FollowButtonProps = {
	user: UserType
	color?: string
}

const FollowButton: React.FC<FollowButtonProps> = (props) => {
	const { user } = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useContext(AppContext)

	const [following, setFollowing] = useState(false)

	const { loading, follow, unfollow } = useSocial({
		url: '/api/v1/social',
	})

	const usernameClick = async (ev) => {
		ev.stopPropagation()
		ev.preventDefault()
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (following) {
			setFollowing(false)
			await unfollow(user?.username)
			fetchMe()
		} else {
			setFollowing(true)
			await follow(user?.username)
			fetchMe()
		}
	}

	useEffect(() => {
		if (currentUser && user) {
			if (isFollowing(currentUser, user)) {
				setFollowing(true)
			} else {
				setFollowing(false)
			}
		}
	}, [currentUser, user])

	if (!currentUser?.id || currentUser?.id == user?.id) return null
	return (
		<Button
			sx={sx.button}
			variant="contained"
			color={following ? 'secondary' : 'primary'}
			onClick={usernameClick}
		>
			{following ? 'Following' : 'Follow'}
		</Button>
	)
}

export default FollowButton

const sx = {
	button: {
		minWidth: 120,
	},
}
