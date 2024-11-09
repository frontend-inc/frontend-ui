'use client'

import React, { useContext } from 'react'
import { List } from '../../core'
import { Sheet } from '../..'
import { AppContext } from '../../../context'
import MobileDrawerLink from './MobileDrawerLink'
import { MenuLinkType } from '../../..'

type MobileDrawerProps = {
	links: MenuLinkType[]
	handleClick: (path: string) => void
}

const MobileDrawer = (props: MobileDrawerProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext)

	const { links, handleClick } = props

	const handleMenuClick = (path: string) => {
		setMenuOpen(false)
		handleClick(path)
	}

	return (
		<Sheet open={menuOpen} handleClose={() => setMenuOpen(false)} side="left">
			<div>
				<List className={'space-y-2'}>
					{links?.map((menuItem, index) => (
						<MobileDrawerLink
							key={index}
							menuItem={menuItem}
							handleClick={handleMenuClick}
						/>
					))}
				</List>
			</div>
		</Sheet>
	)
}

export default MobileDrawer
