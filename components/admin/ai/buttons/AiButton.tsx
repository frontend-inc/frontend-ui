import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import { Icon, AlertModal } from '../../../../components'

type AiButtonProps = {
	loading?: boolean
	icon?: string
	title?: string
	description?: string
	handleClick: () => void
}

const AiButton: React.FC<AiButtonProps> = (props) => {
	const {
		loading,
		icon = 'Wand',
		title = 'Do you want to use AI?',
		description = 'This action may take a while to complete.',
		handleClick,
	} = props || {}

	const [open, setOpen] = useState(false)

	return (
		<>
			<IconButton sx={sx.iconButton} onClick={() => setOpen(true)}>
				<Icon name="Wand" />
			</IconButton>
			<AlertModal
				loading={loading}
				open={open}
				handleClose={() => setOpen(false)}
				icon="Wand"
				title={title}
				description={description}
				handleConfirm={handleClick}
			/>
		</>
	)
}

export default AiButton

const sx = {
	iconButton: {
		minWidth: 44,
		borderRadius: 1,
		bgcolor: 'secondary.main',
		'&:hover': {
			bgcolor: 'secondary.dark',
		},
	},
}
