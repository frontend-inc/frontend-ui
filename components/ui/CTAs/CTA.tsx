import React, { useContext } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'
import { TypographyVariants } from '../../../types'

type CallToActionProps = {
	label?: string
	title: string
	description: string
	buttonText?: string
	textVariant?: TypographyVariantsType
	href?: string
	handleClick?: () => void
	direction?: string
}

// Call To Action
const CTA: React.FC<CallToActionProps> = (props) => {
	const {
		label,
		title,
		description,
		buttonText,
		textVariant = 'h4',
		href,
		handleClick,
	} = props || {}

	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box sx={sx.root}>
			<Stack sx={sx.content} direction="column" spacing={0}>
				{label && (
					<Typography color="primary" sx={sx.label} variant="caption">
						{label}
					</Typography>
				)}
				<Typography sx={sx.title} variant={textVariant}>
					{title}
				</Typography>
				<Typography variant="body2" sx={sx.description}>
					{truncate(description, 160)}
				</Typography>
				{buttonText && (
					<Box sx={sx.actions}>
						<Button
							size="large"
							variant="contained"
							color="primary"
							onClick={handleItemClick}
						>
							{buttonText}
						</Button>
					</Box>
				)}
			</Stack>
		</Box>
	)
}

export default CTA

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	label: {
		color: 'primary.main',
		textAlign: 'center',
	},
	title: {
		textAlign: 'center',
		color: 'text.primary',
	},
	description: {
		color: 'text.secondary',
		textAlign: 'center',
	},
	actions: {
		mt: 2,
		textAlign: 'center',
		width: '100%',
	},
}
