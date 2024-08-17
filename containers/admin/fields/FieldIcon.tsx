import React from 'react'
import { Box } from '@mui/material'
import { Icon } from '../../../components'
import { FIELD_VARIANTS } from '../../../constants'

type FieldIconProps = {
	size?: number
	variant: string
}

const FieldIcon: React.FC<FieldIconProps> = (props) => {
	const { variant } = props

	const field = FIELD_VARIANTS.find((f) => f.variant === variant)

	return (
		<Box
			sx={{
				...sx.iconContainer,
				bgcolor: field?.color,
			}}
		>
			<Icon name={field?.icon} />
		</Box>
	)
}

export default FieldIcon

const sx = {
	iconContainer: {
		p: '5px',
		mr: 1,
		width: '36px',
		height: '36px',
		borderRadius: '8px',
		bgcolor: 'primary.main',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
	},
}
