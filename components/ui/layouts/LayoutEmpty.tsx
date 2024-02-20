import React from 'react'
import { Placeholder } from '../../../components'
import { Box } from '@mui/material'

type LayoutEmptyProps = {
	icon: React.ReactNode
	title: string
	description?: string
}

const LayoutEmpty: React.FC<LayoutEmptyProps> = (props) => {
	const { icon, title, description } = props || {}
	return (
		<Box sx={sx.placeholder}>
			<Placeholder icon={icon} title={title} description={description} />
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
