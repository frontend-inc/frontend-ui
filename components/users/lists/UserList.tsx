import React from 'react'
import { ResourceList } from '../..'
import { UserType } from '../../../types'
import UserListItem from '../cards/UserListItem'
import { COUNTRIES, STATES } from '../../../constants'

export type UserListProps = {
	user: UserType
  url?: string
  enableLocation?: boolean
}

const UserList: React.FC<UserListProps> = (props) => {
	const {         
    enableLocation=false 
  } = props || {}

  let filterOptions = []
  if(enableLocation){
    filterOptions = [
      //@ts-ignore
      {
        label: 'City',
        field: 'city',
        variant: 'multiple_choice',        
        options: STATES 
      },
      //@ts-ignore
      {
        label: 'Country',
        field: 'country',
        variant: 'multiple_choice',
        options: COUNTRIES  
      }
    ]
  }

	return (
		<ResourceList
			enableSearch
			enableLoadMore
			name="user"
			url={'/api/v1/cms/users'}
			component={UserListItem}
			componentProps={{
				size: 64
			}}
      filterOptions={filterOptions}
			sortOptions={[
				{ label: 'Username', name: 'username' },
        { label: 'First name', name: 'first_name' },
        { label: 'Last name', name: 'last_name' },				
			]}
		/>
	)
}

export default UserList
