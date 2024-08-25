import React from 'react'
import { useResourceContext } from 'frontend-js'
import { Box, IconButton } from '@mui/material'
import { PlaylistAdd } from '@mui/icons-material'

type ReferenceButtonProps = {
	resource: any
	color?: string
}

const ReferenceButton: React.FC<ReferenceButtonProps> = (props) => {
	const { resource, color = 'text.secondary' } = props

	const { openReferences, setOpenReferences, setResource } = useResourceContext()

	const handleClick = () => {
		setResource(resource)
		setOpenReferences(!openReferences)
	}

	return (
		<Box>
			<IconButton
				onClick={handleClick}
				sx={{
					color,
					'&:hover': {
						color,
					},
					...sx.icon,
				}}
			>
				<PlaylistAdd fontSize="small" />
			</IconButton>
		</Box>
	)
}

export default ReferenceButton

const sx = {
	icon: {},
	button: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.main',
		color: 'text.secondary',
		'&:hover': {
			bgcolor: 'background.main',
			color: 'text.secondary',
		},
	},
}
