import React from 'react'
import { Resources } from '../..'
import { UserListProps } from './UserList'
import UserListItem from '../cards/UserListItem'

export type UserFollowersListProps = UserListProps

const UserFollowersList: React.FC<UserFollowersListProps> = (props) => {
	const { user, displayFields = [], socialFields = [] } = props || {}

	return (
		<ResourceList
			enableSearch
			enableLoadMore
			name="user"
			url={`/api/v1/cms/users/${user?.username}/followers`}
			component={UserListItem}
			itemProps={{
				size: 72,
				displayFields,
				socialFields,
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
