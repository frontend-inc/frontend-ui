import React from 'react'
import { Button } from '@mui/material'
import { Icon } from '../..'

type FollowButtonProps = {
	following: boolean
	loading: boolean
	handleClick: () => void
}

const FollowButton: React.FC<FollowButtonProps> = (props) => {
	const { following, loading, handleClick } = props

	return (
		<Button
			onClick={handleClick}
			variant={following ? 'outlined' : 'contained'}
			color="primary"
			disabled={loading}
			startIcon={!following && <Icon name="Plus" size={24} />}
		>
			{following ? 'Following' : 'Follow'}
		</Button>
	)
}

export default FollowButton