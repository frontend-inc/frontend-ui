import React from 'react'
import { Typography } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

type AccordionProps = {
	title?: string
	description?: string
	image?: string
}

const AccordionItem: React.FC<AccordionProps> = (props) => {
	const { title, description, image } = props

	return (
		<Accordion sx={ sx.root } elevation={0}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Typography variant="subtitle1">{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant="body1" color="textSecondary">
					{description}
				</Typography>
			</AccordionDetails>
		</Accordion>
	)
}

export default AccordionItem

const sx = {
  root: {
    borderTop: '1px solid',
    borderColor: 'divider',
    my: '0px !important'
  }
}
