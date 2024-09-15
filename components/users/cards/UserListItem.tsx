import React from 'react'
import { Stack, Typography } from '@mui/material'
import { ResourceListItem, UserAvatar, DisplayFields } from '../..'
import { DisplayFieldType, UserType } from '../../../types'

type UserListItemProps = {
	size?: number
	resource: UserType
	displayFields: DisplayFieldType[]
	handleClick?: () => void
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	let {
		resource: user,
		size = 44,
		displayFields = [],
		handleClick,
	} = props || {}

	return (
		<ResourceListItem
			handleClick={handleClick}
			primary={
				<Typography variant="subtitle2" color="text.primary">
					{user?.name}
				</Typography>
			}
			avatar={
				<Stack direction="column" spacing={1} alignItems="center">
					<UserAvatar size={size} user={user} />
				</Stack>
			}
			secondary={<DisplayFields resource={user} fields={displayFields} />}
		/>
	)
}

export default UserListItem
