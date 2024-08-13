import React from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../../../components'

type LayoutTabIconProps = {
	icon: any
	selected?: boolean
	handleClick?: any
}

const LayoutTabIcon: React.FC<LayoutTabIconProps> = (props) => {
	const { icon, selected = false, handleClick } = props
	return (
		<IconButton
			sx={{
				...sx.root,
				...(selected && sx.selected),
			}}
			onClick={handleClick}
		>
			{icon && <Icon name={icon} size={20} />}
		</IconButton>
	)
}

export default LayoutTabIcon

const sx = {
	root: {
		color: 'secondary.contrastText',
		justifyContent: 'center',
		minWidth: '30px',
		borderRadius: 1,
		bgcolor: 'transparent',
		'&:hover': {
			bgcolor: 'secondary.main',
		},
	},
	selected: {
		bgcolor: 'primary.main',
		'&:hover': {
			bgcolor: 'primary.main',
		},
	},
}
