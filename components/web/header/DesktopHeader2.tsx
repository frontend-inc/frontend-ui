'use client'

import React, { useState, useEffect } from 'react'
import { RemixIcon, ButtonActions, AuthButton, Icon } from '../..'
import Logo from './Logo'
import { CartButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { ButtonType, MenuLinkType } from '../../..'
import { cn } from 'frontend-shadcn'
import { NavigationMenu } from './NavigationMenu'
import { Button } from '@nextui-org/react'

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

const MAX_LINKS = 5

const DesktopHeader: React.FC<DesktopHeaderProps> = (props) => {
	
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

  const handleLogoClick = () => {
    handleClick('/')
  }

	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const { setMenuOpen } = useApp()


	return (
      <div
        className={cn(
          'hidden md:block w-full h-16 bg-background'
        )}
        style={{
          backgroundColor: bgColor,
        }}
      >
			  <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row basis-1/3">
            {links?.length > MAX_LINKS && (
              <div className="pl-1 flex items-center justify-center h-[60px]">
                <Button isIconOnly variant="light" onPress={() => setMenuOpen(true)}>
                  <RemixIcon name="ri-menu-fill" />
                </Button>
              </div>
            )}
            <div className="h-[62px] mx-4 flex flex-row items-center justify-start">
              <Logo
                src={logo}
                width={180}
                height={56}
                handleClick={ handleLogoClick }
              />
            </div>
					</div>
          <div className="basis-1/3 flex flex-row justify-center items-center">
            { links?.length <= MAX_LINKS && (
              <NavigationMenu 
                links={ links } 
                handleClick={ handleClick }
              />
            )}
          </div>
					<div className="flex flex-row items-center justify-end h-[60px] pr-1 basis-1/3">
						{buttons?.length > 0 && (
							<div className="pr-1">
								<ButtonActions size="sm" buttons={buttons} />
							</div>
						)}
						{enableAuth && <AuthButton />}
						{enableStripe && <CartButton />}
						{enableShopify && <ShopifyCartButton />}
					</div>
				</div>
			</div>
	)
}

export default DesktopHeader
