'use client'

import React from 'react'
import { RemixIcon } from '../../../components'
import { useRouter } from 'next/navigation'
import { DropdownMenuItem } from 'frontend-shadcn'

type ButtonMenuProps = {
	path: string
	url: string
	icon?: string
	label: string
	onClick?: (ev: React.MouseEvent<HTMLDivElement>) => void
}

const ButtonMenu: React.FC<ButtonMenuProps> = (props) => {
	const { onClick, url, path, label, icon } = props

	const router = useRouter()

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (onClick) {
			onClick(event)
		} else {
			if (url) {
				window.open(url, '_blank')
			} else {
				router.push(path)
			}
		}
	}

	return (
		<DropdownMenuItem onClick={handleClick} className="cursor-pointer">
			{icon && (
				<span className="mr-2">
					<RemixIcon name={icon} />
				</span>
			)}
			{label}
		</DropdownMenuItem>
	)
}

export default ButtonMenu
