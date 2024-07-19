import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {
	DisplayFields,
	BuyNowButton,
	StripePaymentLink,
	SocialButtons,
	Actions,
	AvgRating,
	ExpandableText,
} from '../..'
import { ShowProps } from './ShowItem'
import { get } from 'lodash'
import { buildActions } from '../../../helpers'

type ShowLayoutProps = ShowProps & {
	children?: React.ReactNode
}

const ShowLayout: React.FC<ShowLayoutProps> = (props) => {
	const {
		actions,
		displayFields = [],
		resource,
		children,
		enableEdit,
		handleEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enablePayments,
	} = props || {}

	const { title, description } = resource || {}
	return (
		<Stack sx={sx.root} spacing={4}>
			{(actions || enableEdit) && (
				<Box sx={sx.actions}>
					<Actions
						actions={buildActions({
							enableEdit,
							handleEdit,
							actions,
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
				{enableRatings == true && <AvgRating resource={resource} enableTotal />}
				{displayFields?.length > 0 && (
					<DisplayFields fields={displayFields} resource={resource} />
				)}
				{enablePayments == true && (
					<StripePaymentLink
						resource={resource}
						buttonText="Checkout"
						justifyContent="center"
					/>
				)}
			</Stack>
			<Box sx={sx.container}>{children}</Box>
			<SocialButtons
				handle={resource?.handle}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
				enableSharing={enableSharing}
			/>
			<Box sx={sx.content}>
				<ExpandableText text={description} />
			</Box>
		</Stack>
	)
}

export default ShowLayout

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
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
	actions: {
		justifyContent: 'center',
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	container: {
		width: '100%',
		borderRadius: 1,
	},
}
