import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { ResourceList } from '../..'
import { DisplayFieldType, SocialFieldType, UserType } from '../../../types'
import UserListItem from '../cards/UserListItem'
import { COUNTRIES, STATES } from '../../../constants'
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
    enableLocation=false,
    displayFields=[],
    socialFields=[] 
  } = props || {}

  const handleClick = (user: UserType) => {    
    if(href){
      router.push(`${clientUrl}${href}/${user?.username}`)
    }
  }

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
      dense
			enableSearch
			enableLoadMore
			name="user"
			url={'/api/v1/cms/users'}
      handleClick={ handleClick }
			component={UserListItem}			      
      itemProps={{  
        size: 72,      
        displayFields,
        socialFields
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
