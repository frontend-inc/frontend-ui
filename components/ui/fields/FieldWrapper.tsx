import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

type FieldWrapperProps = {
	direction?: 'row' | 'column'
	label?: string
	enableBorder?: boolean
	children?: React.ReactNode
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
	const {
		direction = 'column',
		label,
		enableBorder = false,
		children,
	} = props || {}

	return (
		<Stack
			direction={{ xs: 'column', sm: direction }}
			spacing={1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			{label && (
				<Box
					sx={{
						...sx.label,
						...(direction === 'row' && sx.labelRow),
					}}
				>
					<Typography variant="caption" color="text.secondary">
						{label}
					</Typography>
				</Box>
			)}
			<Box>{children}</Box>
		</Stack>
	)
}

export default FieldWrapper

const sx = {
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
	root: {
		minHeight: 110,
	},
	rootBorder: {
		p: 2,
		width: '100%',
		borderRadius: 1,
		border: '1px solid',
		borderColor: 'divider',
	},
}
