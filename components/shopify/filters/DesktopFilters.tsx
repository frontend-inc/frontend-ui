import React from 'react'
import { Stack, Hidden } from '@mui/material'

type DesktopFilterProps = {
	children?: React.ReactNode
}

const DesktopFilters: React.FC<DesktopFilterProps> = (props) => {
	const { children } = props || {}

	return (
		<Hidden smDown>
			<Stack spacing={2} direction="row" sx={sx.root}>
				{children}
			</Stack>
		</Hidden>
	)
}

export default DesktopFilters

const sx = {
	root: {
		width: '100%',
		overflowX: 'scroll',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'nowrap',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
}
