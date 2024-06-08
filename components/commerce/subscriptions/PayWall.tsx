import React from 'react'
import { Heading, SubscriptionTable } from '../../../components'
import { Stack, Box } from '@mui/material'

const PayWall: React.FC = () => {
	return (
		<Box sx={sx.root}>
			<Heading
				title="Subscription required"
				description="Please subscribe below to continue"
				textAlign="center"
			/>
			<Box width={'100%'}>
				<SubscriptionTable />
			</Box>
		</Box>
	)
}

export default PayWall

const sx = {
	root: {
		height: 'calc(100vh - 120px)',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '40px',
	},
}
