import React from 'react'
import {
	Stack,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Rating,
} from '@mui/material'
import { UserAvatar } from '../..'
import moment from 'moment'

type ReviewProps = {
	resource: any
	user?: any
	handleDelete?: (review: any) => void
}

const Review: React.FC<ReviewProps> = (props) => {
	const { resource } = props

	return (
		<ListItem sx={sx.listItem}>
			<ListItemIcon sx={sx.listItemIcon}>
				<UserAvatar user={resource?.user} />
			</ListItemIcon>
			<ListItemText
				primary={<Rating readOnly sx={sx.rating} value={resource.rating} />}
				secondary={
					<Stack direction="column" spacing={1}>
						<Typography variant="body1" color="text.primary">
							{resource?.title}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={sx.reviewText}
						>
							{resource.body}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={sx.caption}>
							{`@${resource?.user?.username}`} reviewed{' '}
							{moment(resource?.created_at).fromNow()}
						</Typography>
					</Stack>
				}
			/>
		</ListItem>
	)
}

export default Review

const sx = {
	root: {
		py: 1,
	},
	rating: {
		color: 'primary.main',
	},
	listItem: {
		pb: 1,
		borderBottom: '1px solid',
		borderColor: 'divider',
		alignItems: 'flex-start',
		'&:hover .MuiBox-root': {
			display: 'block',
		},
	},
	listItemIcon: {
		mt: 1,
		mr: 2,
	},
	reviewText: {
		mb: 1,
		color: 'text.primary',
		whiteSpace: 'pre-wrap',
		'& span': {
			fontWeight: 500,
		},
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
		'&:hover': {
			color: 'text.primary',
		},
	},
	caption: {
		fontSize: 14,
	},
	divider: {
		pb: 1,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
}
