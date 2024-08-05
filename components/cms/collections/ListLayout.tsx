import React from 'react'
import { Box } from '@mui/material'

type ListLayoutProps = {
	grid?: boolean
	children: React.ReactNode
}

const ListLayout: React.FC<ListLayoutProps> = (props) => {
	const { grid = false, children } = props

	return (
		<Box
			sx={{
				...sx.root,
				...(grid ? sx.grid : sx.list),
			}}
		>
			{children}
		</Box>
	)
}

export default ListLayout

const sx = {
	root: {
		width: '100%',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	listDense: {
		gap: '8px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
		pb: 1,
	},
}
