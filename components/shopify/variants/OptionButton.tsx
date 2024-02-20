import React from 'react'
import { Button } from '@mui/material'

type OptionButtonProps = {
	value: string
	name: string
	active: boolean
	handleClick: any
	children: any
	width?: number
	justifyContent?: string
}

const OptionButton: React.FC<OptionButtonProps> = (props) => {
	const { value, name, active, handleClick, children } = props

	return (
		<Button
			sx={{
				...sx.button,
				...(active && sx.active),
			}}
			variant={active ? 'contained' : 'outlined'}
			color="primary"
			onClick={() => handleClick(name, value)}
		>
			{children}
		</Button>
	)
}

export default OptionButton

const sx = {
	active: {
		opacity: 1,
	},
	button: {
		textWrap: 'nowrap',
	},
}
