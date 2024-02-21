import React from 'react'
import { LayoutLoader } from '../../../components'
import { Box } from '@mui/material'

type LayoutPageProps = {
	title: string
	actions?: React.ReactNode
	secondaryActions?: React.ReactNode
	menuItems?: any[]
	activeItem?: string
	loading?: boolean
	disableGutters?: boolean
	children: React.ReactNode
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
	const { children, disableGutters = false, loading = false } = props

	return (
		<LayoutLoader loading={loading}>
			<Box
				sx={{
					...sx.content,
					...(disableGutters && sx.disableGutters),
				}}
			>
				{children}
			</Box>
		</LayoutLoader>
	)
}

export default LayoutPage

const sx = {
	content: {
		width: '100%',
		bgcolor: 'background.default',
		minHeight: 'calc(100vh - 60px)',
	},
	disableGutters: {
		py: 0,
	},
}
