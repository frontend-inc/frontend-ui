import React from 'react'
import { useResourceContext } from 'frontend-js'
import { Box, IconButton } from '@mui/material'
import { PlaylistAdd } from '@mui/icons-material'

type AddToListProps = {
  variant?: 'icon' | 'button'
	resource: any
	color?: string
}

const AddToList: React.FC<AddToListProps> = (props) => {
	const { variant = 'icon', resource, color = 'text.secondary' } = props

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
					...(variant == 'icon' ? sx.icon : sx.button),          
				}}
			>
				<PlaylistAdd fontSize="small" />
			</IconButton>      
		</Box>
	)
}

export default AddToList

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
