import React from 'react'
import { Button } from '@mui/material'

type ShopifyOptionButtonProps = {
	value: string
	name: string
	active: boolean
	handleClick: any
	children: any
	width?: number
	justifyContent?: string
}

const ShopifyOptionButton: React.FC<ShopifyOptionButtonProps> = (props) => {
	const { value, name, active, handleClick, children } = props

	return (
		<Button
			sx={{
				...sx.button,
				...(active && sx.active),
			}}
			variant="contained"
			color={active ? 'primary' : 'secondary'}
			onClick={() => handleClick(name, value)}
		>
			{children}
		</Button>
	)
}

export default ShopifyOptionButton

const sx = {
	active: {
		opacity: 1,
	},
	button: {
		textWrap: 'nowrap',
	},
}
