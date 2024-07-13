import React from 'react'
import { Paper, Box, Stack, Typography } from '@mui/material'
import {
	AvgRating,
	DisplayFields,
	Actions,
	Image,
  SocialButtons,
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
    enableLikes,
    enableFavorites,
    enableSharing,
	} = props || {}

	const { image, label, title } = resource || {}

	if (!resource) return null
	return (
		<Paper elevation={1} sx={sx.paper}>
			<Stack direction="column" spacing={0} sx={sx.header}>
				{image?.url && (
					<Box sx={sx.imageContainer}>
						<Image 
              disableBorderRadius 
              label={label} 
              src={image?.url} 
              alt={title} 
              height={400} 
              objectFit='contain'
            />
					</Box>
				)}
				<Stack spacing={0.5} direction="column" p={2} width="100%">
        {(enableLikes || enableFavorites || enableSharing) && (
					<SocialButtons
						justifyContent="center"
						handle={resource?.handle}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableSharing={enableSharing}
					/>
				)}
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
			</Stack>
		</Paper>
	)
}

export default HeroSnippet

const sx = {
	paper: {		
    border: '1px solid',
    borderColor: 'divider',
    my: 1,
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
		width: '100%',
    borderRadius: theme => 
      `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
    overflow: 'hidden'
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
}
