'use client'

import React from 'react'
import { useAuth } from 'frontend-js'
import { UserAvatar, RemixIcon } from '../../../components'
import {
  Button,
	Dropdown,
  DropdownMenu,
	DropdownTrigger,
	DropdownItem,	
  DropdownSection	
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

type AuthProps = {
	handleLogin: () => void
	handleSignup: () => void
	handleMyAccount: () => void
	menuItems?: {
		icon?: string
		label: string
		path: string
		onClick?: () => void
	}[]
}

const Auth: React.FC<AuthProps> = (props) => {

	const {
		handleLogin,
		handleSignup,
		handleMyAccount,
		menuItems = [],
	} = props || {}

	const { currentUser, logout } = useAuth()

	const router = useRouter()


	const handleClick = (menuItem) => {
		if (menuItem.onClick) {
			menuItem.onClick()
		} else {
			router.push(menuItem?.path)
		}
	}

	const handleLogout = () => {
		logout()
		router.push('/')
	} 

  const handleAction = (action) => {
    switch(action){
      case 'logout':
        handleLogout()
        break
      case 'login':
        handleLogin()
        break
      case 'signup':
        handleSignup()
        break
      case 'my-account':
        handleMyAccount()
        break
    }
  }
 

	return (
		<Dropdown>
			<DropdownTrigger asChild>
				<Button 
          isIconOnly 
          variant="ghost"           
        >
					<UserAvatar size={34} user={currentUser} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu onAction={ handleAction }>
				  {currentUser ? (
					  <>
            <DropdownSection showDivider>
							<DropdownItem
								className="font-normal"
								key='my-account'
							>
								<div className="flex flex-col space-y-1">
									<p className="text-sm font-medium leading-none">
										{currentUser.name}
									</p>
									<p className="text-xs leading-none text-muted-foreground">
										{currentUser.email}
									</p>
								</div>
							</DropdownItem>
            </DropdownSection>
						<DropdownSection showDivider>
							{menuItems?.map((menuItem, idx) => (
								<DropdownItem
									key={idx}
									onClick={() => handleClick(menuItem)}
								>
									{menuItem?.icon && (
										<RemixIcon name={menuItem?.icon} className="mr-2" />
									)}
									{menuItem?.label}
								</DropdownItem>
							))}
						</DropdownSection>
						<DropdownItem key='logout'>
							<RemixIcon name="ri-logout-circle-line" className="mr-2" />
							Log out
						</DropdownItem>
					</>
				) : (
					<>
						<DropdownItem key='login'>Sign In</DropdownItem>
						<DropdownItem key='signup'>Sign Up</DropdownItem>
					</>
				)}
			</DropdownMenu>
		</Dropdown>
	)
}

export default Auth
