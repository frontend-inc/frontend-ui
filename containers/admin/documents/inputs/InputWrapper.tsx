import React, { useState } from 'react'
import { Label } from '../../../../components'
import { Box, IconButton, Typography, Collapse } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

type DocumentInputWrapperProps = {
	title: string
	label: string
	children: any
	defaultOpen?: boolean
	expandable?: boolean
	disablePadding?: boolean
}

const DocumentInputWrapper: React.FC<DocumentInputWrapperProps> = (props) => {
	const {
		title,
		label,
		children,
		defaultOpen = true,
		expandable = false,
		disablePadding = false,
	} = props

	const [open, setOpen] = useState(defaultOpen)

	return (
		<Box
			sx={{
				...sx.root,
				...(!disablePadding && sx.padding),
			}}
		>
			{expandable && (
				<Box>
					<IconButton size={'small'} onClick={() => setOpen(!open)}>
						<KeyboardArrowDown
							sx={{
								...sx.icon,
								...(!open && sx.rotateIcon),
							}}
						/>
					</IconButton>
				</Box>
			)}
			<Box sx={sx.inputField}>
				<Box sx={sx.inputLabel}>
					<Typography variant="overline" color="text.secondary">
						{title}
					</Typography>
					<Label label={label} />
				</Box>
				<Collapse in={open}>{children}</Collapse>
			</Box>
		</Box>
	)
}

export default DocumentInputWrapper

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	padding: {
		pb: 2,
	},
	inputLabel: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	inputField: {
		flexGrow: {
			xs: 1,
			sm: 0.5,
		},
		width: '100%',

		pr: 0,
		pl: 1,
		borderLeft: '3px solid',
		borderColor: 'transparent',
		transition: 'border-color 0.3s ease-in-out',
		'&:hover': {
			borderColor: 'primary.main',
		},
	},
	icon: {
		height: 20,
		width: 20,
		borderRadius: 1,
		color: 'text.secondary',
		bgcolor: 'background.hover',
		transition: '0.2s',
		transform: 'rotate(0)',
	},
	rotateIcon: {
		transform: 'rotate(-90deg)',
	},
}
