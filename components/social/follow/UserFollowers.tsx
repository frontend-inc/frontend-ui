import React from 'react'
import { 
  ResourceList 
} from '../..'
import { UserType } from '../../../types'
import FollowUser from './FollowUser'

export type UserFollowersProps = {
  user: UserType 
}

const UserFollowers: React.FC<UserFollowersProps> = (props) => {

  const { user } = props || {}

  return (
    <ResourceList 
      enableSearch
      enableLoadMore        
      name='user'
      url={`/api/v1/cms/users/${user?.username}/followers`}
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

export default UserFollowers
