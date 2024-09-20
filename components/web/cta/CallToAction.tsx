import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { ButtonType, TypographyVariantsType } from '../../../types'
import { ButtonActions } from '../..'

export type CallToActionProps = {
	label?: string
	title: string
	description: string
	textVariant?: TypographyVariantsType
	buttons: ButtonType[]
	direction?: string
}

// Call To Action
const CallToAction: React.FC<CallToActionProps> = (props) => {
	const { label, title, description, buttons } = props || {}

	return (
		<Box sx={sx.root}>
			<Stack sx={sx.content} direction="column" spacing={1}>
				{label && (
					<Typography color="text.secondary" variant="caption" sx={sx.label}>
						{label}
					</Typography>
				)}
				{title && (
					<Typography variant={'h3'} color="text.primary" sx={sx.title}>
						{title}
					</Typography>
				)}
				{description && (
					<Typography
						variant="subtitle2"
						color="text.secondary"
						sx={sx.description}
					>
						{description}
					</Typography>
				)}
				{buttons?.length > 0 && (
					<Box sx={sx.buttons}>
						<ButtonActions
							resource={[]}
							buttons={buttons}
							size="large"
							justifyContent="center"
						/>
					</Box>
				)}
			</Stack>
		</Box>
	)
}

export default CallToAction

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
		alignItems: 'center',
	},
	label: {
		textAlign: 'center',
	},
	title: {
		textAlign: 'center',
		color: 'text.primary',
	},
	description: {
		color: 'text.secondary',
		textAlign: 'center',
		maxWidth: '600px',
	},
	buttons: {
		pt: 2,
		textAlign: 'center',
		width: '100%',
	},
}
