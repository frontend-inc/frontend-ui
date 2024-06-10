import React from 'react'
import { Box } from '@mui/system'
import { FollowButton, Resource, UserAvatar } from '../../../components'
import { UserType } from '../../../types'

type FollowUserProps = {
  size?: number
  resource: UserType
}

const FollowUser: React.FC<FollowUserProps> = (props) => {
  const { resource: user, size = 44 } = props || {}

  return (
    <Resource
      resource={user}
      avatar={
        <UserAvatar 
          size={size}
          user={ user } 
        />
      }            
      title={ user?.name }      
      displayFields={[
        { label: 'Username', variant: 'string', name: 'display_username' },
        { label: 'Followers', variant: 'number', name: 'display_num_followers' },
      ]}
      secondaryActions={
        <FollowButton
          user={ user }
        />
      }
    />
  )
}

export default FollowUser