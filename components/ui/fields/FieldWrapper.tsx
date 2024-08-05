import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Icon } from '../../../components'

type FieldWrapperProps = {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	label?: string
	icon?: string
	color?: string
	alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
	disablePadding?: boolean
	enableBorder?: boolean
	children?: React.ReactNode
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
	const {
		direction = 'column',
		label,
		icon,
		color = 'text.secondary',
		alignItems = 'flex-start',
		enableBorder = false,
		disablePadding = false,
		children,
	} = props || {}

	return (
		<Stack
			direction={direction}
			spacing={disablePadding ? 0 : 1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
			alignItems={alignItems}
		>
			{label && (
				<Box
					sx={{
						...sx.label,
						...((direction === 'row' || direction == 'row-reverse') &&
							sx.labelRow),
					}}
				>
					<Typography variant="caption" color={color}>
						{label}
					</Typography>
				</Box>
			)}
			<Stack direction="row" spacing={1}>
				{icon && <Icon name={icon} color={color} size={20} />}
				{children}
			</Stack>
		</Stack>
	)
}

export default FieldWrapper

const sx = {
	root: {
		width: '100%',
	},
	text: {
		color: 'text.secondary',
	},
	label: {
		width: '100%',
	},
	labelRow: {
		minWidth: 100,
		width: 100,
		pr: 1,
	},
	rootBorder: {
		p: 2,
		width: '100%',
		borderRadius: 1,
		border: '1px solid',
		borderColor: 'divider',
	},
}
