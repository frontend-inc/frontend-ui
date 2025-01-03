'use client'

import React from 'react'
import { Typography } from '../../../components'
import { ResourceListItem, UserAvatar, ListFields } from '../..'
import { MetafieldType, UserType } from '../../../types'

type UserListItemProps = {
	resource: UserType
	displayFields: MetafieldType[]
	handleClick?: () => void
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	let { resource: user, displayFields = [], handleClick } = props || {}

	return (
		<ResourceListItem
			handleClick={handleClick}
			primary={<Typography variant="subtitle2">{user?.name}</Typography>}
			avatar={<UserAvatar user={user} />}
			secondary={<ListFields resource={user} fields={displayFields} />}
		/>
	)
}

export default UserListItem
