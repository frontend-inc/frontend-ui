import React from 'react'
import { Stack, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { Image, Icon } from '../..'

type AccordionProps = {
	primary: string
	secondary: React.ReactNode 
	image?: string
	icon?: string 
  startIcon?: string
  disablePadding?: boolean
}

const AccordionItem: React.FC<AccordionProps> = (props) => {
	const { primary, secondary, startIcon, icon = 'Plus', disablePadding, image } = props

	return (
		<Accordion 
      sx={{ 
        ...sx.root, 
        ...(disablePadding && sx.disablePadding)
      }} 
      elevation={0}
    >
			<AccordionSummary expandIcon={<Icon name={icon} />}>
        <Stack direction="row" spacing={1}>
          { startIcon && <Icon name={startIcon} size={20} /> } 
          <Typography variant="subtitle1">{primary}</Typography>
        </Stack>
			</AccordionSummary>
			<AccordionDetails sx={sx.accordionDetails}>
				<Stack direction="row" spacing={2}>
					{ secondary }
				</Stack>
			</AccordionDetails>
		</Accordion>
	)
}

export default AccordionItem

const sx = {
	root: {
		bgcolor: 'background.default',
		borderColor: 'divider',
		my: '0px !important',
		py: 1,
		borderRadius: 0,
	},
  disablePadding: {
    py: 0,
  },
	imageContainer: {
		width: 256,
		height: 256,
		overflow: 'hidden',
	},
	accordionDetails: {
		bgcolor: 'background.default',
	},
  image: {
    width: 160,
		height: 160,
  }
}
