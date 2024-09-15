import React from 'react'
import { Box } from '@mui/material'

type DataLayoutProps = {
	loading?: boolean
	grid?: boolean
	children: React.ReactNode
}

const DataLayout: React.FC<DataLayoutProps> = (props) => {
	const { loading, grid = false, children } = props

	return (
		<Box
			sx={{
				...sx.root,
				...(grid ? sx.grid : sx.list),
				...(loading && sx.loading),
			}}
		>
			{children}
		</Box>
	)
}

export default DataLayout

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
		gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
		gap: '16px',
		pb: 1,
	},
	loading: {
		opacity: 0.5,
	},
}
