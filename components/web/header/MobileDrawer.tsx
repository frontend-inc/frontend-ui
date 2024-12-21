'use client'

import React, { useContext } from 'react'
import { Sheet } from '../..'
import { AppContext } from '../../../context'
import { MenuLinkType } from '../../..'
import NestedSidebarMenu from './NestedSidebarMenu'

type MobileDrawerProps = {
	links: MenuLinkType[]
	handleClick: (path: string) => void
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const { links, handleClick } = props

	const handleMenuClick = (link: any) => {    
		setMenuOpen(false)
		handleClick(link?.path)
	}

	return (
		<Sheet open={menuOpen} handleClose={() => setMenuOpen(false)} side="left">
      <NestedSidebarMenu 
        links={ links } 
        handleClick={ handleMenuClick } 
      />                    
		</Sheet>
	)
}

export default MobileDrawer
