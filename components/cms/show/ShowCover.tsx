import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {
	Cover,
	DisplayFields,
	BuyNowButton,
	StripePaymentLink,
	SocialButtons,
	ActionButtons,
	AvgRating,
} from '../..'
import { ShowProps } from './ShowItem'
import { get } from 'lodash'
import { buildActions } from '../../../helpers'

const ShowCover: React.FC<ShowProps> = (props) => {
	const {
		buttons,
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
					resource={resource}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableSharing={enableSharing}
				/>
				{(buttons || enableEdit) && (
					<Box sx={sx.buttons}>
						<ActionButtons
							buttons={buildActions({
								enableEdit,
								handleEdit,
								buttons,
							})}
							numVisible={4}
							resource={resource}
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

export default ShowCover

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
	buttons: {
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
