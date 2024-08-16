import React from 'react'
import { Paper, Box, Stack, Typography } from '@mui/material'
import {
	AvgRating,
	DisplayFields,
	Image,
	SocialButtons,
	UserChip,
	StripePaymentLink,
} from '../..'
import { ShowProps } from './ShowItem'

const ShowSnippet: React.FC<ShowProps> = (props) => {
	const {
		resource,
		url,
		buttons = [],
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
		<Paper elevation={0} sx={sx.paper}>
			<Stack direction="column" spacing={0} sx={sx.header}>
				<Box sx={sx.imageContainer}>
					<Image
						disableBorderRadius
						label={label}
						src={image?.url}
						alt={title}
						height={260}
					/>
				</Box>
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

export default ShowSnippet

const sx = {
	paper: {
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
		borderRadius: (theme) =>
			`${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
		overflow: 'hidden',
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
}
