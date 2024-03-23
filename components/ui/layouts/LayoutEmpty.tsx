import React from 'react'
import { Placeholder } from '../../../components'
import { Box } from '@mui/material'

type LayoutEmptyProps = {
	icon?: string
	color?: string
	title: string
	description?: string
}

const LayoutEmpty: React.FC<LayoutEmptyProps> = (props) => {
	const { icon, color, title, description } = props || {}
	return (
		<Box sx={sx.placeholder}>
			<Placeholder
				icon={icon}
				color={color}
				title={title}
				description={description}
			/>
		</Box>
	)
}

export default LayoutEmpty

const sx = {
	icon: {
		color: 'text.primary',
	},
	placeholder: {
		px: 2,
		height: '400px',
	},
}
