import React from 'react'
import { Stack, Box, Avatar, Typography } from '@mui/material'
import { Icon } from '../../components'

type PlaceholderProps = {
	icon?: string
	title?: string
	description?: string
	actions?: any
	color?: string
	enableBorder?: boolean
	enableAvatarBorder?: boolean
}

const Placeholder: React.FC<PlaceholderProps> = (props) => {
	const {
		icon,
		title,
		description,
		actions,
		color = 'text.secondary',
		enableBorder = false,
	} = props

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.border),
			}}
		>
			<Stack spacing={1} alignItems="center">
				{icon && <Icon name={icon} size={24} color={color} />}
				<Typography sx={sx.title} variant="subtitle2">
					{title}
				</Typography>
				<Typography sx={sx.description} variant="body1" color="textSecondary">
					{description}
				</Typography>
				{actions && <Box sx={sx.actions}>{actions}</Box>}
			</Stack>
		</Box>
	)
}
export default Placeholder

const sx = {
	root: {
		p: 4,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',		
		width: '100%',
	},
	title: {
		color: 'text.primary',
		textAlign: 'center',
	},
	description: {
		textAlign: 'center',
	},
	border: {
		border: '1px solid',
		borderColor: 'divider',
	},
	actions: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
}
