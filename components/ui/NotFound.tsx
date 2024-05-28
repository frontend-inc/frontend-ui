import React from 'react'
import { Stack, Divider, Typography } from '@mui/material'
import { Icon } from '../../components'

const NotFound: React.FC = () => {
	return (
		<Stack
			sx={sx.root}
			direction={{ sm: 'row', xs: 'column' }}
			divider={<Divider sx={sx.divider} />}
			spacing={2}
			alignItems={'center'}
		>
			<Typography color="text.primary" variant="h1">
				404
			</Typography>
			<Typography color="text.secondary" variant="subtitle2">
				Page not found
			</Typography>
		</Stack>
	)
}

export default NotFound

const sx = {
	root: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		width: '100%',
		p: 2,
	},
	divider: {
		height: 80,
		width: 2,
		bgcolor: 'divider',
		display: { xs: 'none', sm: 'block' },
	},
}
