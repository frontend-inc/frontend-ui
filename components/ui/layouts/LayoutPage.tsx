import React from 'react'
import { LayoutLoader } from '../../../components'
import { Box } from '@mui/material'

type LayoutPageProps = {
	loading?: boolean
	disableGutters?: boolean
	children: React.ReactNode
  contentOffset?: number
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
	const { 
    children, 
    disableGutters = false, 
    loading = false,
    contentOffset = 200 
  } = props

	return (
		<LayoutLoader loading={loading}>
			<Box
				sx={{
					...sx.content,
          minHeight: {
            sm: `calc(100vh - ${contentOffset}px)`,
            xs: '100vh'
          },
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
	},
	disableGutters: {
		py: 0,
	},
}
