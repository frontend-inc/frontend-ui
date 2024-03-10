import React from 'react'
import { Box, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'

type FieldWrapperProps = {
	variant?: TypographyVariantsType
	flexDirection?: 'row' | 'column'
	label?: string
	color?: string
	helperText?: string
	children?: React.ReactNode
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
	const {
		variant = 'overline',
		flexDirection = 'row',
		label,
		color = 'text.primary',
		helperText,
		children,
	} = props || {}

	return (
		<Box sx={sx.root}>
			<Box
				sx={{
					...sx.field,
					flexDirection: {
						xs: 'column',
						sm: flexDirection,
					},
				}}
			>
				{label && (
					<Box
						sx={{
							...sx.label,
							color,
							...(flexDirection === 'row' && sx.labelRow),
						}}
					>
						<Typography
							variant={variant}
							sx={{
								...sx.text,
								textAlign: flexDirection === 'row' ? 'right' : 'left',
							}}
						>
							{label}
						</Typography>
					</Box>
				)}
				<Box sx={sx.field}>{children}</Box>
			</Box>
			{helperText && (
				<Typography variant={variant} sx={sx.helperText}>
					{helperText}
				</Typography>
			)}
		</Box>
	)
}

export default FieldWrapper

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	field: {},
	text: {
		color: 'text.secondary',
	},
	label: {
		width: '100%',
	},
	labelRow: {
		width: '100%',
		maxWidth: 160,
		pr: 1,
	},
	helperText: {
		color: 'text.secondary',
	},
}
