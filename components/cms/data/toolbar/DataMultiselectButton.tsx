import React from 'react'
import { Button } from '@mui/material'
import { Icon } from '../../..'
import { MultiselectButtonType } from '../../../../types'
import { useResourceContext } from 'frontend-js'

export type DataMultiselectButtonProps = {
	button: MultiselectButtonType
}

const DataMultiselectButton: React.FC<DataMultiselectButtonProps> = (props) => {
	const { selected } = useResourceContext()
	const { button } = props || {}

	const {
		onClick,
		variant = 'contained',
		label = 'Click me',
		icon,
		color = 'primary',
	} = button || {}

	return (
		<Button
			variant={variant}
			color={color}
			onClick={selected ? () => onClick(selected) : undefined}
			startIcon={icon && <Icon name={icon} size={20} color="text.primary" />}
		>
			{label}
		</Button>
	)
}

export default DataMultiselectButton
