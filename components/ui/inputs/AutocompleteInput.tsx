import React, { useState } from 'react'
import { TextInput, Icon } from '../..'
import {
	Avatar,
	Paper,
	Stack,
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	ClickAwayListener,
} from '@mui/material'
import { TextInputPropsType } from '../../../types'

type AutocompleteInput = TextInputPropsType & {
	handleInputChange: (keywords: string) => void
}

const AutocompleteInput: React.FC<AutocompleteInput> = (props) => {
	const {
		name = 'title',
		value = '',
		label,
		placeholder = 'Search',
		handleChange,
		handleInputChange,
		options = [],
		direction = 'column',
		info,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleClick = (option) => {
		setOpen(false)
		handleChange({
			target: {
				name: name,
				value: option?.value,
			},
		})
	}

	const handleKeywordChange = (ev) => {
		let { value } = ev.target
		handleInputChange(value)
		if (options?.length > 0) setOpen(true)
		if (value == '') {
			setOpen(false)
		}
	}

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<Stack width={'100%'} direction="column" spacing={0}>
				<TextInput
					name={name}
					label={label}
					value={value}
					options={options}
					handleChange={handleKeywordChange}
					direction={direction}
					placeholder={placeholder}
					onFocus={() => setOpen(!open)}
					info={info}
				/>
				<Box sx={sx.anchor}>
					{open && (
						<Paper
							elevation={2}
							sx={{
								...sx.paper,
								height: options?.length * 64,
							}}
						>
							<List dense sx={sx.list}>
								{options?.map((option, index) => (
									<ListItem>
										<ListItemButton
											sx={sx.listItemButton}
											onClick={() => handleClick(option)}
										>
											<ListItemIcon sx={sx.listItemIcon}>
												{option?.image && (
													<Avatar
														alt={option.label}
														src={option.image}
														sx={sx.avatar}
													/>
												)}
												{option?.icon && <Icon name={option.icon}  />}
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="body1" sx={sx.label}>
														{option.label}
													</Typography>
												}
											/>
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Paper>
					)}
				</Box>
			</Stack>
		</ClickAwayListener>
	)
}
export default AutocompleteInput

const sx = {
	anchor: {
		position: 'relative',
	},
	paper: {
		p: 0,
		position: 'absolute',
		top: 2,
		left: 0,
		width: '100%',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		maxHeight: '220px',
		overflowY: 'scroll',
		zIndex: (theme) => theme.zIndex.modal,
	},
	avatar: {
		borderRadius: 1,
		height: 32,
		width: 32,
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
	listItemButton: {
		px: 1,
		py: 0,
		height: 44,
	},
	listItemIcon: {
		width: 32,
		minWidth: 32,
		mr: 2,
	},
	mapContainer: {
		overflow: 'hidden',
	},
	label: {
		width: '100%',
		textAlign: 'left',
	},
}
