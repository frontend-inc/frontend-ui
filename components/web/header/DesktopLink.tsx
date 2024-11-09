'use client'

import React from 'react'
import { Button } from '../../core'
import { MenuLinkType } from '../../..'
import { useNavigate } from '../../../hooks'

type DesktopLinkProps = {
	menuItem: MenuLinkType
	handleClick: (path: string) => void
}

const DesktopLink: React.FC<DesktopLinkProps> = (props) => {
	const { menuItem, handleClick } = props

	const onClick = useNavigate({
		url: menuItem.url,
		path: menuItem.path,
		handleClick,
	})

	return (
		//@ts-ignore
		<Button variant="ghost" className="text-foreground" onClick={onClick}>
			{menuItem.label}
		</Button>
	)
}

export default DesktopLink
