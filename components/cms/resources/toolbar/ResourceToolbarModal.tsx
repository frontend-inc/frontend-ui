import React from 'react'
import { AppBar, Toolbar, Slide } from '@mui/material'
import { Box, Stack, IconButton } from '@mui/material'
import { Icon } from '../../..'
import ResourceToolbarButtons from './ResourceToolbarButtons'
import { MultiselectButtonType } from '../../../../types'

type ResourceToolbarModalProps = {
	open: boolean
	handleClose: () => void
	actions: React.ReactNode
	selected?: any[]
	selectedIds?: number[] | string[]
	buttons: MultiselectButtonType[]
	component?: React.FC<any>
}

const ResourceToolbarModal: React.FC<ResourceToolbarModalProps> = (props) => {
	const {
		open,
		selected,
		selectedIds,
		handleClose,
		buttons,
		component: Component = ResourceToolbarButtons,
		...rest
	} = props || {}

	return (
		<Slide direction="down" in={open}>
			<AppBar position="fixed" color="secondary" sx={sx.appBar}>
				<Toolbar>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						<Box sx={sx.iconButton}></Box>
						<Component
							selected={selected}
							selectedIds={selectedIds}
							buttons={buttons}
							{...rest}
						/>
						<Box sx={sx.iconButton}>
							<IconButton onClick={handleClose}>
								<Icon name="X" />
							</IconButton>
						</Box>
					</Stack>
				</Toolbar>
			</AppBar>
		</Slide>
	)
}

export default ResourceToolbarModal

const sx = {
	appBar: {
		m: 0,
		top: '-10px',
	},
	iconButton: {
		width: '40px',
		height: '40px',
	},
}
