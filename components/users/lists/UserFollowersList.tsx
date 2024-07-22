import React from 'react'
import { ResourceList } from '../..'
import { UserType } from '../../../types'
import UserListItem from '../cards/UserListItem'

export type UserFollowersListProps = {
	user: UserType
}

const UserFollowersList: React.FC<UserFollowersListProps> = (props) => {
	const { user } = props || {}

	return (
		<ResourceList
			enableSearch
			enableLoadMore
			name="user"
			url={`/api/v1/cms/users/${user?.username}/followers`}
			component={UserListItem}
			componentProps={{
				size: 64,
			}}
			sortOptions={[
				{ label: 'Username', name: 'username' },
				{ label: 'Total followers', name: 'num_followers' },
				{ label: 'Total following', name: 'num_following' },
			]}
		/>
	)
}

export default UserFollowersList
