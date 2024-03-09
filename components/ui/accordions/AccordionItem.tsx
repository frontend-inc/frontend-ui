import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { Icon, Text } from '../../../components'

type AccordionProps = {
	title: string
	description: string
	image?: string
	icon?: 'Plus' | 'ChevronDown'
}

const AccordionItem: React.FC<AccordionProps> = (props) => {
	const { title, description, icon = 'Plus', image } = props

	return (
		<Accordion sx={sx.root} elevation={0}>
			<AccordionSummary expandIcon={<Icon name={icon} />}>
				<Typography variant="subtitle1">{title}</Typography>
			</AccordionSummary>
			<AccordionDetails sx={sx.accordionDetails}>
				<Stack
					direction={{
						sm: 'row',
						xs: 'column',
					}}
					spacing={2}
				>
					{image && (
						<Box sx={sx.imageContainer}>
							<img
								alt={title}
								src={image}
								height={256}
								width={256}
								style={{
									width: '100%',
									objectFit: 'contain',
								}}
							/>
						</Box>
					)}
					<Text variant="body1" color="textSecondary">
						{description}
					</Text>
				</Stack>
			</AccordionDetails>
		</Accordion>
	)
}

export default AccordionItem

const sx = {
	root: {
		bgcolor: 'background.default',
		borderTop: '1px solid',
		borderColor: 'divider',
		my: '0px !important',
	},
	imageContainer: {
		width: 256,
		height: 256,
		overflow: 'hidden',
	},
	accordionDetails: {
		bgcolor: 'background.default',
	},
}
