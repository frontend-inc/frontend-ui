import React from 'react'
import { Box, Chip, Button, Typography } from '@mui/material'
import { TeamType } from '../../../types'
import { TeamAvatar } from '../../../components'

type CellTeamProps = {
	children: string
	handleClick?: () => void
	value?: TeamType
}

const CellTeam: React.FC<CellTeamProps> = (props) => {
	const { value: team, handleClick } = props
	if (!team?.id) return null
	return (
		<Box sx={sx.cell}>
			<Button
				sx={sx.button}
				size="small"
				color="secondary"
				onClick={handleClick}
				startIcon={<TeamAvatar team={team} />}
			>
				<Typography variant="caption">{team?.name}</Typography>
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
