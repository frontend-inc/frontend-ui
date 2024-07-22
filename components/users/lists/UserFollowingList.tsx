import React from 'react'
import { ResourceList } from '../..'
import { UserType } from '../../../types'
import UserListItem from '../cards/UserListItem'

export type UserFollowingListProps = {
	user: UserType
}

const UserFollowingList: React.FC<UserFollowingListProps> = (props) => {
	const { user } = props || {}

	return (
		<ResourceList
			enableSearch
			enableLoadMore
			name="user"
			url={`/api/v1/cms/users/${user?.username}/following`}
			component={UserListItem}
			componentProps={{
				size: 64,
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
