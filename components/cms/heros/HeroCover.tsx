import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {
	Cover,
	DisplayFields,
	BuyNowButton,
	StripePaymentLink,
	SocialButtons,
	Actions,
	AvgRating,
} from '../..'
import { HeroProps } from './HeroItem'
import { flattenDocument } from 'frontend-js'
import { buildActions } from '../../../helpers'

const HeroCover: React.FC<HeroProps> = (props) => {
	const {
		actions,
		displayFields = [],
		resource,
		handleEdit,
		enableEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enablePayments,
	} = props || {}
	const { title, image, description } = resource || {}
	return (
		<Stack sx={sx.root} spacing={4}>
			<Cover image={image?.url} height={400} title={title} enableOverlay />
			<Stack spacing={3} sx={sx.header}>
				<SocialButtons
					handle={resource?.handle}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableSharing={enableSharing}
				/>
				{(actions || enableEdit) && (
					<Box sx={sx.actions}>
						<Actions
							actions={buildActions({
								enableEdit,
								handleEdit,
								actions,
							})}
							numVisible={4}
							resource={flattenDocument(resource)}
							justifyContent="center"
						/>
					</Box>
				)}
				{enableRatings == true && (
					<AvgRating justifyContent="center" resource={resource} enableTotal />
				)}
				{displayFields?.length > 0 && (
					<DisplayFields
						alignItems="center"
						fields={displayFields}
						resource={resource}
					/>
				)}
				{enablePayments == true && (
					<StripePaymentLink
						resource={resource}
						buttonText="Checkout"
						justifyContent="center"
					/>
				)}
			</Stack>
			<Box sx={sx.content}>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
		</Stack>
	)
}

export default HeroCover

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	header: {
		px: 2,
		maxWidth: 500,
		width: '100%',
		textAlign: 'center',
	},
	content: {
		px: 2,
		width: '100%',
		pb: 4,
		maxWidth: {
			sm: 500,
			xs: '100%',
		},
	},
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	caption: {
		color: 'text.secondary',
	},
	actions: {
		justifyContent: 'center',
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	imageContainer: {
		width: '100%',
		borderRadius: 1,
	},
}
