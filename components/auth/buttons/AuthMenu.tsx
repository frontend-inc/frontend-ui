'use client'

import React from 'react'
import { useAuth } from 'frontend-js'
import { UserAvatar, RemixIcon } from '../../../components'
import { Button } from '../../../components'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from 'frontend-shadcn'
import { useRouter } from 'next/navigation'

type AuthMenuProps = {
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

const AuthMenu: React.FC<AuthMenuProps> = (props) => {
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

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 rounded-full">
					<UserAvatar size={32} user={currentUser} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				{currentUser ? (
					<>
						<DropdownMenuGroup>
							<DropdownMenuItem
								className="font-normal"
								onClick={handleMyAccount}
							>
								<div className="flex flex-col space-y-1">
									<p className="text-sm font-medium leading-none">
										{currentUser.name}
									</p>
									<p className="text-xs leading-none text-muted-foreground">
										{currentUser.email}
									</p>
								</div>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							{menuItems?.map((menuItem, idx) => (
								<DropdownMenuItem
									key={idx}
									onClick={() => handleClick(menuItem)}
								>
									{menuItem?.icon && (
										<RemixIcon name={menuItem?.icon} className="mr-2" />
									)}
									{menuItem?.label}
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
						<DropdownMenuItem onClick={handleLogout}>
							<RemixIcon name="ri-logout-circle-line" className="mr-2" />
							Log out
						</DropdownMenuItem>
					</>
				) : (
					<>
						<DropdownMenuItem onClick={handleLogin}>Sign In</DropdownMenuItem>
						<DropdownMenuItem onClick={handleSignup}>Sign Up</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default AuthMenu
