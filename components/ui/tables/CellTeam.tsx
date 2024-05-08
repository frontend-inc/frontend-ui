import React from 'react'
import { Box, Chip, Button, Typography } from '@mui/material'
import { TeamType } from '../../../types'
import { TeamAvatar } from '../../../components'

type CellTeamProps = {
	children: string
	value?: TeamType
}

const CellTeam: React.FC<CellTeamProps> = (props) => {
	const { value: team } = props
	return (
		<Box sx={sx.cell}>
			<Button
				sx={sx.button}
				size="small"
				color="secondary"
				startIcon={<TeamAvatar team={team} />}
			>
				<Typography variant="caption">
					{team?.name}
				</Typography>
			</Button>
		</Box>
	)
}

export default CellTeam

const sx = {
	cell: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	button: {
		borderRadius: (theme) => theme.shape.borderRadius,
	},
}
