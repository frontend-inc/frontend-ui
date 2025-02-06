'use client'

import React, { useState } from 'react'
import { RemixIcon, Buttons, AuthButton } from '../..'
import NavLogo from './NavLogo'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { ButtonType, MenuLinkType } from '../../..'
import { useTheme, useNavigate } from '../../../hooks'
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
} from '@nextui-org/react'
import { cn } from 'frontend-shadcn'

export type HeaderProps = {
	mode?: 'light' | 'dark'
	logo?: string
	links?: MenuLinkType[]
	buttons?: ButtonType[]
	bgColor?: string
	enableAuth?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
  className?: string
}

const MAX_LINKS = 3

const Header: React.FC<HeaderProps> = (props) => {
	const {
		logo,
		mode = 'dark',
		links = [],
		buttons,
		enableAuth = false,
		enableStripe = false,
		enableShopify = false,
    className
	} = props

	const { theme } = useTheme()

	const navigate = useNavigate()

	const handlePress = (path: string) => {
		setIsMenuOpen(false)
		navigate(path)
	}

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<div className={cn(
      theme && mode && `${theme}-${mode}`, 
      'z-40',
      className
    )}>
			<Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
				<NavbarContent justify="start">
					{links?.length > MAX_LINKS ? (
						<NavbarMenuToggle className="text-foreground" />
					) : (
						<NavbarContent className="sm:hidden" justify="start">
							<NavbarMenuToggle className="text-foreground" />
						</NavbarContent>
					)}
					<NavbarBrand>
						<NavLogo src={logo} handleClick={() => handlePress('/')} />
					</NavbarBrand>
				</NavbarContent>
				{links?.length <= MAX_LINKS && (
					<NavbarContent className="hidden sm:flex gap-4" justify="center">
						{links?.map((link, index) =>
							link?.children?.length > 0 ? (
								<Dropdown key={index}>
									<DropdownTrigger>
										<Button
											variant="light"
											className="text-foreground"
											endContent={
												<RemixIcon
													size="lg"
													name="ri-arrow-down-s-line"
													className="text-foreground"
												/>
											}
										>
											{link?.label}
										</Button>
									</DropdownTrigger>
									<DropdownMenu
										//@ts-ignore
										onAction={handlePress}
									>
										{link?.children?.map((child) => (
											<DropdownItem key={child?.path || child?.url}>
												{child?.label}
											</DropdownItem>
										))}
									</DropdownMenu>
								</Dropdown>
							): (
              <NavbarItem key={index}>
              <Button
                className="text-foreground"
                variant="light"
                onPress={() => handlePress(link?.path)}
              >
                {link?.label}
              </Button>
            </NavbarItem>
            )
          )}
					</NavbarContent>
				)}
				<NavbarContent justify="end">
					{buttons?.length > 0 && <Buttons size="sm" buttons={buttons} />}
					{enableAuth && <AuthButton />}
					{enableStripe && <CartButton />}
					{enableShopify && <ShopifyCartButton />}
				</NavbarContent>
				<NavbarMenu>
					{links?.map((link, index) => (
						<NavbarMenuItem key={index}>
							{link?.children?.length > 0  ? (															
								<Dropdown key={index}>
									<DropdownTrigger>
										<Button
											size="lg"
											variant="light"
											className="w-full"
											endContent={
												<RemixIcon
													name="ri-arrow-down-s-line"
													className="text-foreground"
												/>
											}
										>
											{link?.label}
										</Button>
									</DropdownTrigger>
									<DropdownMenu onAction={handlePress}>
										{link?.children?.map((child) => (
											<DropdownItem key={child?.path || child?.url}>
												{child?.label}
											</DropdownItem>
										))}
									</DropdownMenu>
								</Dropdown>
							):(
                <Button
									variant="light"
									className="w-full"
									onPress={() => handlePress(link?.path)}
									size="lg"
								>
									{link?.label}
								</Button>
              )}
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</div>
	)
}

export default Header
