import React from 'react'
import {
	Box,
	Paper,
	ListItemButton,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
} from '@mui/material'
import { Icon } from '../../../../components'
import { OptionType } from 'frontend-js'
import { truncate } from '../../../../helpers'

type LocationOptionsListProps = {
	open: boolean
	options: OptionType[]
	handleClick: (option: OptionType) => void
}

const LocationOptionsList: React.FC<LocationOptionsListProps> = (props) => {
	const { open, options = [], handleClick } = props || {}

	return (
		<Box sx={sx.anchor}>
			{open && (
				<Paper
					sx={{
						...sx.container,
						height: (options?.length || 0) * 58,
					}}
					elevation={2}
				>
					<List dense disablePadding sx={sx.list}>
						{options?.map((option, index) => (
							<ListItem sx={sx.listItem} disableGutters>
								<ListItemButton
									sx={sx.listItemButton}
									onClick={() => handleClick(option)}
								>
									<ListItemIcon>
										<Icon name="MapPin" size={20} />
									</ListItemIcon>
									<ListItemText primary={option.value} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Paper>
			)}
		</Box>
	)
}

export default LocationOptionsList

const sx = {
	anchor: {
		position: 'relative',
	},
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		maxHeight: '240px',
		overflowY: 'scroll',
		zIndex: (theme) => theme.zIndex.modal,
	},
	list: {
		bgcolor: 'background.paper',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		width: '100%',
		zIndex: 1,
	},
	listItem: {
		p: 0,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	listItemButton: {
		px: 1,
		py: 0,
		minHeight: 58,
	},
	mapContainer: {
		overflow: 'hidden',
	},
}
