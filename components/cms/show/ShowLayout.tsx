import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import {
	DisplayFields,
	SocialButtons,
	ButtonActions,
	AvgRating,
	ExpandableText,
} from '../..'
import { ShowProps } from './ShowItem'
import { buildActions } from '../../../helpers'

type ShowLayoutProps = ShowProps & {
	fieldName?: string
	resource?: any
	children?: React.ReactNode
}

const ShowLayout: React.FC<ShowLayoutProps> = (props) => {
	const {
		resource,
		children,
		enableEdit,
		handleEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		buttons = [],
		displayFields = [],
	} = props || {}

	const { title, description } = resource || {}
	return (
		<Stack sx={sx.root} spacing={4}>
			{(buttons || enableEdit) && (
				<Box sx={sx.buttons}>
					<ButtonActions
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
				{enableRatings == true && <AvgRating resource={resource} enableTotal />}
				{displayFields?.length > 0 && (
					<DisplayFields fields={displayFields} resource={resource} />
				)}
			</Stack>
			<Box sx={sx.container}>{children}</Box>
			<SocialButtons
				resource={resource}
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
	buttons: {
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
