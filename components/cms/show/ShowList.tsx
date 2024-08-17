import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {
	DisplayFields,
	StripePaymentLink,
	SocialButtons,
	ActionButtons,
	Image,
	AvgRating,
} from '../..'
import { ShowProps } from './ShowItem'
import { buildActions } from '../../../helpers'

const ShowList: React.FC<ShowProps> = (props) => {
	const {
		buttons,
		displayFields = [],
		resource,
		enableEdit,
		handleEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enablePayments,
	} = props || {}
	const { label, title, image, description } = resource || {}
	return (
		<Stack sx={sx.root} spacing={4}>
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
			<Stack spacing={3} sx={sx.header}>
				<Typography color="text.primary" variant="h3">
					{title}
				</Typography>
				{enableRatings == true && (
					<AvgRating justifyContent="center" resource={resource} enableTotal />
				)}
				<DisplayFields
					alignItems="center"
					fields={displayFields}
					resource={resource}
				/>
				{enablePayments == true && (
					<StripePaymentLink
						resource={resource}
						buttonText="Checkout"
						justifyContent="center"
					/>
				)}
			</Stack>
			<Box sx={sx.imageContainer}>
				<Image src={image?.url} alt={title} height={400} label={label} />
			</Box>
			<SocialButtons
				resource={resource}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
				enableSharing={enableSharing}
			/>
			<Box sx={sx.content}>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
		</Stack>
	)
}

export default ShowList

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		pb: 2,
	},
	header: {
		maxWidth: 500,
		width: '100%',
		textAlign: 'center',
	},
	content: {
		width: '100%',
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
