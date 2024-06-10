import React from 'react'
import { FollowButton, Resource, UserAvatar } from '../../../components'
import { UserType } from '../../../types'

type FollowUserProps = {
  resource: UserType
}

const FollowUser: React.FC<FollowUserProps> = (props) => {
  const { resource: user } = props || {}

  return (
    <Resource
      resource={user}
      avatar={
        <UserAvatar 
          size={44}
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