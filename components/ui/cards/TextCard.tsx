import React from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { CardProps } from './Card'

const TextCard: React.FC<CardProps> = (props) => {
	const {
    primary,
    secondary,
    actions,
    secondaryAction,
		handleClick,
    slots={
      item: {},
    }
	} = props || {}

	return (
		<Box sx={sx.root} { ...slots.item }>
			<Stack direction="row" spacing={1}>
				<Stack direction="column" spacing={1} sx={sx.content}>
					<Link sx={sx.link} onClick={handleClick}>
						<Typography color="text.primary" variant="subtitle1">
							{truncate(primary, 40)}
						</Typography>
					</Link>
					<Typography
						color="text.secondary"
						variant="body2"
						sx={sx.description}
					>
						{ secondary }
					</Typography>
					<Stack direction="row">
						{ actions }
					</Stack>
				</Stack>
			</Stack>
			<Stack direction="row" justifyContent="flex-end" sx={sx.buttons}>
				{ secondaryAction }
			</Stack>
		</Box>
	)
}

export default TextCard

const sx = {
	root: {
		py: 1,
		minHeight: 140,
		position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
		cursor: 'auto',
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	description: {
		maxWidth: '600px',
	},
	buttons: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
	link: {
		cursor: 'pointer',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}
