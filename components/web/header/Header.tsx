'use client'

import React, { useState } from 'react'
import { RemixIcon, ButtonActions, AuthButton } from '../..'
import Logo from './Logo'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { ButtonType, MenuLinkType } from '../../..'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { cn } from 'frontend-shadcn'

type DesktopHeaderProps = {
	logo: string
	links: MenuLinkType[]
	buttons: ButtonType[]
	bgColor?: string
	enableAuth?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
	handleClick: (path: string) => void
}

const MAX_LINKS = 3

const Header: React.FC<DesktopHeaderProps> = (props) => {
	
  const {
		logo,
		links,
		buttons,
		bgColor,
		handleClick,
		enableAuth = false,
		enableStripe = false,
		enableShopify = false,
	} = props

  const handlePress = (path: string) => {
    setIsMenuOpen(false)
    handleClick(path)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
    <Navbar                   
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
    >
      { links?.length > MAX_LINKS ? (
        <NavbarContent justify="start">
          <NavbarMenuToggle />
        </NavbarContent>      
      ):(
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>      
      )}      
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo 
            src={ logo } 
            handleClick={() => handlePress('/')}
          />
        </NavbarBrand>
      </NavbarContent>
      { links?.length <= MAX_LINKS && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        { links?.map((link, index) => (
            link?.children?.length == 0 ? (
            <NavbarItem key={ index }>
              <Button 
                className='text-foreground'
                variant="link" 
                onPress={() => handlePress(link?.path)}
              >
                { link?.label }
              </Button>            
            </NavbarItem>  
          ) : (
            <Dropdown key={index}>
              <DropdownTrigger>
                <Button 
                  variant="light"
                  className='text-foreground'
                  endContent={
                    <RemixIcon 
                      size='lg'
                      name="ri-arrow-down-s-line" 
                      className='text-foreground' 
                    />
                  }
                >
                  { link?.label }
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                onAction={ handlePress }                
              >
                { link?.children?.map((child) => (
                  <DropdownItem key={child?.path}>                    
                    { child?.label }                    
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          )
        ))}
      </NavbarContent>  
      )}      
      <NavbarContent justify="end">
        {buttons?.length > 0 && (
          <ButtonActions size="sm" buttons={buttons} />
        )}
        {enableAuth && <AuthButton />}
        {enableStripe && <CartButton />}
        {enableShopify && <ShopifyCartButton />}
      </NavbarContent>
      <NavbarMenu>
        {links?.map((link, index) => (
          <NavbarMenuItem key={link?.id}>
            { link?.children?.length == 0 ? (
            <Button 
              variant="link"
              className="w-full"
              onPress={() => handlePress(link?.path)}
              size="lg"
            >
              {link?.label}
            </Button>
            ):(
              <Dropdown key={ index }>
                <DropdownTrigger>
                  <Button 
                    size='lg'
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
                <DropdownMenu                  
                  onAction={handlePress}
                >
                  {link?.children?.map(child => (
                    <DropdownItem key={child?.path}>
                      {child?.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
	)
}

export default Header
