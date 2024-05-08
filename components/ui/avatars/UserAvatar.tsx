import React from 'react'
import Avatar from './Avatar'
import { getInitials } from '../../../helpers'

type UserAvatarProps = {
	user: any
	size?: number
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { user, size = 36 } = props
	return(
    <Avatar 
      color={ user?.color }
      label={ getInitials(user?.name) } 
      size={size} 
      src={user?.avatar?.url} 
    />        
  )
}

export default UserAvatar
