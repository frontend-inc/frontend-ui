import React from 'react'
import { Paper, Box, Stack, Typography } from '@mui/material'
import {
	AvgRating,
	DisplayFields,
	Actions,
	Image,
	UserChip,
	StripePaymentLink,
} from '../..'
import { HeroProps } from './HeroItem'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const HeroSnippet: React.FC<HeroProps> = (props) => {
	const {
		resource,
		url,
		actions = [],
		displayFields = [],
		enableRatings,
		enablePayments,
		enableEdit,
		handleEdit,
	} = props || {}

	const { image, label, title } = resource || {}

	if (!resource) return null
	return (
		<Paper elevation={0} sx={sx.paper}>
			<Stack direction="row" spacing={2} sx={sx.header}>
				{image?.url && (
					<Box sx={sx.imageContainer}>
						<Image disableBorderRadius label={label} src={image?.url} alt={title} height={240} />
					</Box>
				)}
				<Stack spacing={0.5} direction="column" p={2} width="100%">
					<Typography variant="subtitle1" color="text.primary">
						{resource?.title}
					</Typography>
					{enableRatings == true && (
						<AvgRating resource={resource} enableTotal />
					)}
					<DisplayFields fields={displayFields} resource={resource} />
					{enablePayments == true && (
						<StripePaymentLink
							resource={resource}
							buttonText="Checkout"
							justifyContent="center"
						/>
					)}
					<UserChip user={resource?.user} />
				</Stack>
				<Box justifyContent="flex-end">
					{(actions?.length > 0 || enableEdit) && (
						<Actions
							numVisible={0}
							actions={buildActions({
								enableEdit,
								handleEdit,
								actions,
							})}
							justifyContent="flex-end"
							resource={flattenDocument(resource)}
						/>
					)}
				</Box>
			</Stack>
		</Paper>
	)
}

export default HeroSnippet

const sx = {
	paper: {		
    border: '1px solid',
    borderColor: 'divider',
    mb: 2,
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 2,
    },
	},
	container: {
    borderRadius: 1,
    overflow: 'hidden',
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	header: {
		width: '100%',
	},
	imageContainer: {
		width: 240,
		minWidth: 240,
    borderRadius: theme => 
      `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
    overflow: 'hidden'
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
}
