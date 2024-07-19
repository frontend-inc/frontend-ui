import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {
	AvgRating,
	DisplayFields,
	StripePaymentLink,
	Actions,
	Image,
	SocialButtons,
	ExpandableText,
} from '../..'
import { ShowProps } from './ShowItem'
import { buildActions } from '../../../helpers'

const ShowCard: React.FC<ShowProps> = (props) => {
	const {
		actions,
		resource,
		displayFields = [],
		enableEdit,
		handleEdit,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableRatings,
		enablePayments,
	} = props || {}
	const { label, title, image, description } = resource || {}

	if (!resource) return null
	return (
		<Stack spacing={2}>
			{(actions || enableEdit) && (
				<Box sx={sx.actions}>
					<Actions
						actions={buildActions({
							enableEdit,
							handleEdit,
							actions,
						})}
						justifyContent="flex-end"
						resource={resource}
					/>
				</Box>
			)}
			<Box sx={sx.root}>
				<Stack
					sx={sx.container}
					direction={{
						md: 'row',
						xs: 'column',
					}}
					spacing={4}
				>
					<Stack spacing={2} direction="column" sx={sx.leftPanel}>
						<Box sx={sx.imageContainer}>
							<Image src={image?.url} alt={title} height={400} label={label} />
						</Box>
						<SocialButtons
							handle={resource?.handle}
							enableLikes={enableLikes}
							enableFavorites={enableFavorites}
							enableSharing={enableSharing}
						/>
					</Stack>
					<Stack spacing={2} sx={sx.content}>
						<Typography color="text.primary" variant="h4">
							{title}
						</Typography>
						{enableRatings == true && (
							<AvgRating resource={resource} enableTotal />
						)}
						{displayFields?.length > 0 && (
							<DisplayFields fields={displayFields} resource={resource} />
						)}
						{enablePayments == true && (
							<StripePaymentLink resource={resource} buttonText="Checkout" />
						)}
						<ExpandableText text={description} />
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}

export default ShowCard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rootBorder: {
		overflow: 'hidden',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		border: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	image: {
		height: {
			sm: 256,
			xs: 180,
		},
		width: {
			sm: 256,
			xs: 180,
		},
	},
	header: {
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
	contentBorder: {
		p: 2,
	},
	caption: {
		color: 'text.secondary',
	},
	actions: {
		width: '100%',
	},
	imageContainer: {
		transition: 'all 0.5s ease-in-out',
		borderRadius: 1,
		width: '100%',
		minWidth: {
			sm: 420,
			xs: '100%',
		},
	},
	leftPanel: {
		width: '100%',
	},
	leftPanelBorder: {
		pb: 2,
	},
}
