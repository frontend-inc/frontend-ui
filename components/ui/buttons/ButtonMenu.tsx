import React from 'react'
import { MenuItem } from '@mui/material'
import { useRouter } from 'next/router'

type ButtonMenuProps = {
	path: string
	url: string
	icon?: string
	label: string
	onClick?: (ev: any) => void
}

const ButtonMenu: React.FC<ButtonMenuProps> = (props) => {
	const { onClick, url, path, label } = props

	const router = useRouter()

	const handleClick = () => {
		if (url) {
			window.open(url, '_blank')
		} else {
			router.push(path)
		}
	}

	return <MenuItem onClick={onClick ? onClick : handleClick}>{label}</MenuItem>
}

export default ButtonMenu
