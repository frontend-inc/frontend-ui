'use client'

import React from 'react'
import { UserAvatar } from '../..'
import { useAuth } from 'frontend-js'
import {
  Avatar,
  Button,
  Dropdown,
	DropdownMenu,	
	DropdownItem,	
	DropdownTrigger,
} from '@nextui-org/react'
import { LogOut } from 'lucide-react'

type UserMenuProps = {
	handleLogoutClick: () => void
	children?: React.ReactNode
	handleClick: () => void
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
	const { handleLogoutClick, handleClick, children } = props || {}

	const { currentUser } = useAuth()

  const handleAction = (key: string) => {
    switch(key) {
      case 'logout':
        handleLogoutClick()
        break
      case 'user':
        handleClick()
        break
    }
  }

  if(!currentUser?.id) return null;
	return (
			<Dropdown>
				<DropdownTrigger>
          <Button isIconOnly> 
            <UserAvatar size={36} user={currentUser} />           
          </Button>
				</DropdownTrigger>
        <DropdownMenu onAction={ handleAction}>
          <DropdownItem key='user'>
            {currentUser?.name || "User"}          
          </DropdownItem>
          <DropdownItem key='logout' 
            endContent={
              <LogOut className="h-4 w-4" />
            }>          
            Sign Out
          </DropdownItem>       
      </DropdownMenu>
		</Dropdown>
	)
}

export default UserMenu
