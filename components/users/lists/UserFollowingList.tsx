import React from 'react'
import { ResourceList } from '../..'
import { UserListProps } from './UserList'
import UserListItem from '../cards/UserListItem'

export type UserFollowingListProps = UserListProps

const UserFollowingList: React.FC<UserFollowingListProps> = (props) => {
	const {
		user,
		displayFields = [],
		socialFields = [],
		enableFollowers,
	} = props || {}

	return (
		<ResourceList
			enableSearch
			enableLoadMore
			name="user"
			url={`/api/v1/cms/users/${user?.username}/following`}
			component={UserListItem}
			itemProps={{
				size: 72,
				displayFields,
				socialFields,
				enableFollowers,
			}}
			sortOptions={[
				{ label: 'Username', name: 'username' },
				{ label: 'First name', name: 'first_name' },
				{ label: 'Last name', name: 'last_name' },
				{ label: 'Total followers', name: 'num_followers' },
				{ label: 'Total following', name: 'num_following' },
			]}
		/>
	)
}

export default UserFollowingList
