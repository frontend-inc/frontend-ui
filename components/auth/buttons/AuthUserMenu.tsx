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

  const handleAction = (key) => {
    switch(key) {
      case 'logout':
        handleLogoutClick()
        break
      case 'user':
        handleClick()
        break
    }
  }

	return (
			<Dropdown>
				<DropdownTrigger asChild>
          <Button isIconOnly>
            <Avatar isBordered 
              className='transition-transform'
              src={ currentUser?.avatar?.url } 
            />
          </Button>
					<UserAvatar size={36} user={currentUser} />
				</DropdownTrigger>
        <DropdownMenu onAction={ handleAction}>
        <DropdownItem key='user'>
          <div className="flex items-center">
            <span className="text-sm font-medium">{currentUser?.name}</span>
          </div>
        </DropdownItem>
        <DropdownItem key='logout'>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownItem>
        {children}
      </DropdownMenu>
		</Dropdown>
	)
}

export default UserMenu
