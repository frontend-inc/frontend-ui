import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Icon } from '../../../components'

export type StatisticProps = {
	value: number
	label: string
	icon?: any
	direction?: 'row' | 'column'
	enableBorder?: boolean
}

export const Statistic: React.FC<StatisticProps> = (props) => {
	const { value, label, icon, direction = 'row', enableBorder = false } = props

	return (
		<Stack
			spacing={direction === 'row' ? 1 : 0}
			direction={direction}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Box>
				<Icon name={icon} size={24} />
			</Box>
			<Typography variant="h6" color="textPrimary">
				{value}
			</Typography>
			<Typography variant="caption" color="textSecondary">
				{label}
			</Typography>
		</Stack>
	)
}

export default Statistic

const sx = {
	root: {
		p: 1,
		borderRadius: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	rootBorder: {
		p: 2,
		border: '1px solid',
		borderColor: 'divider',
	},
}
