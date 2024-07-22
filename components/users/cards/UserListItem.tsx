import React from 'react'
import { FollowButton, ResourceListItem, UserAvatar } from '../..'
import { UserType } from '../../../types'

type UserListItemProps = {
	size?: number
	resource: UserType
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	const { resource: user, size = 44 } = props || {}

	return (
		<ResourceListItem
			resource={user}
			avatar={<UserAvatar size={size} user={user} />}
			title={user?.name}
			displayFields={[
				{ label: 'Username', variant: 'string', name: 'display_username' },
				{
					label: 'Followers',
					variant: 'number',
					name: 'display_num_followers',
				},
			]}
			secondaryActions={<FollowButton user={user} />}
		/>
	)
}

export default UserListItem
