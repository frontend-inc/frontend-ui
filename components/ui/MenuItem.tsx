import React from 'react'
import { Button, ListItem } from '@mui/material'
import { Icon } from '../../components'

type MenuItemProps = {
	label: string
	handleClick: () => void
	active?: boolean
	depth?: number
	open?: boolean
	expandable?: boolean
	icon?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
	const {
		handleClick,
		active = false,
		depth = 0,
		open,
		expandable = false,
		label,
		icon,
	} = props

	let paddingLeft = 18

	if (depth > 0) {
		paddingLeft = 42 + 8 * depth
	}

	const style = {
		paddingLeft,
	}

	return (
		<ListItem sx={sx.itemLeaf} disableGutters>
			<Button
				onClick={handleClick}
				sx={{
					...sx.button,
					...(active && sx.active),
				}}
				style={style}
				startIcon={icon && icon}
			>
				{label}
			</Button>
		</ListItem>
	)
}
export default MenuItem

const sx = {
	item: {
		display: 'block',
	},
	itemLeaf: {
		display: 'flex',
		pt: 0,
		pb: 0,
		borderRadius: 1,
		ml: '4px',
		mr: '4px',
	},
	button: {
		width: '100%',
		minWidth: 40,
		borderRadius: 1,
		p: '12px 8px',
		justifyContent: 'flex-start',
		labelTransform: 'uppercase',
		letterSpacing: 0,
		mr: '10px',
	},
	icon: {
		height: 20,
		width: 20,
		color: 'text.primary',
		display: 'flex',
		alignItems: 'center',
		mt: 0,
		mr: 1,
		mb: 0,
		ml: 1,
		m: { sm: 0 },
	},
	expandIcon: {
		ml: 'auto',
		height: 20,
		width: 20,
	},
	label: {
		color: 'text.primary',
		display: 'flex',
		alignItems: 'center',
		ml: 'auto',
	},
	active: {
		color: 'primary.contrastText',
		bgcolor: 'primary.main',
		boxShadow: `0 0 0 1px rgb(35 38 59 / 5%), 0 1px 3px 0 rgb(35 38 59 / 15%)`,
		'&:hover': {
			color: 'primary.contrastText',
			bgcolor: 'primary.main',
		},
	},
}
