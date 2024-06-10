import React from 'react'
import { 
  ResourceList 
} from '../..'
import { UserType } from '../../../types'
import FollowUser from './FollowUser'

export type UserFollowingProps = {
  user: UserType 
}

const UserFollowing: React.FC<UserFollowingProps> = (props) => {

  const { user } = props || {}

  return (
    <ResourceList 
      enableSearch
      enableLoadMore        
      name='user'
      url={`/api/v1/cms/users/${user?.username}/following`}
      component={ 
        FollowUser 
      }  
      componentProps={{
        size: 64
      }}      
      enableSorting
      sortOptions={[
        { label: 'Username', field: 'username'},
        { label: 'Total followers', field: 'num_followers'},        
        { label: 'Total following', field: 'num_following'},        
      ]}
    />      
  )
}

export default UserFollowing
