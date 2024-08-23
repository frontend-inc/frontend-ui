import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { ResourceList } from '../..'
import { DisplayFieldType, SocialFieldType, UserType } from '../../../types'
import UserListItem from '../cards/UserListItem'
import { useRouter } from 'next/router'

export type UserListProps = {
	user: UserType
	url?: string
	href?: string
	enableLocation?: boolean
	enableFollowers?: boolean
	displayFields: DisplayFieldType[]
	socialFields: SocialFieldType[]
}

const UserList: React.FC<UserListProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		href,
		enableLocation = false,
		displayFields = [],
		socialFields = [],
	} = props || {}

	const handleClick = (user: UserType) => {
		if (href) {
			router.push(`${clientUrl}${href}/${user?.username}`)
		}
	}

	return (
		<ResourceList
			enableSearch
			enableLoadMore
			name="user"
			url={'/api/v1/cms/users'}
			handleClick={handleClick}
			filterOptions={[]}
			sortOptions={[
				{ label: 'Username', name: 'username' },
				{ label: 'First name', name: 'first_name' },
				{ label: 'Last name', name: 'last_name' },
			]}
      component={UserListItem}
			slots={{
				list: {
          size: 72,
				  displayFields,
				  socialFields
        }
			}}
		/>
	)
}

export default UserList
