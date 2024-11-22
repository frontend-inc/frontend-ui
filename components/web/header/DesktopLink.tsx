'use client'

import React from 'react'
import { Button } from '../../../components'
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
		<Button
			variant="ghost"
			className="text-muted-foreground hover:text-foreground hover:bg-transparent"
      // @ts-ignore
			onClick={onClick}
		>
			{menuItem.label}
		</Button>
	)
}

export default DesktopLink
