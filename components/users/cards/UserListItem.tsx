import React from 'react'
import { Stack } from '@mui/material'
import { FollowButton, ResourceListItem, UserAvatar, DisplayFields } from '../..'
import { DisplayFieldType,  UserType } from '../../../types'

type UserListItemProps = {
	size?: number
	resource: UserType
	displayFields: DisplayFieldType[]
	enableFollowers?: boolean
	handleClick?: () => void
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
	let {
		resource: user,
		size = 44,
		displayFields = [],
		enableFollowers,
		handleClick,
	} = props || {}

	return (
		<ResourceListItem
			handleClick={handleClick}
      primary={ user?.name }			
			avatar={
				<Stack direction="column" spacing={1} alignItems="center">
					<UserAvatar size={size} user={user} />
				</Stack>
			}
      secondary={
        <DisplayFields 
          resource={ user } 
          fields={ displayFields } 
        />
      }			
			secondaryActions={enableFollowers && <FollowButton user={user} />}
		/>
	)
}

export default UserListItem
