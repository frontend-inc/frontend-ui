import React, { useEffect, useState } from 'react'
import {	
  Stack,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
  Rating
} from '@mui/material'
import { UserAvatar } from '../../../components'
import moment from 'moment'

type ReviewProps = {
	review: any
	user?: any	
	handleDelete?: (review: any) => void
}

const Review: React.FC<ReviewProps> = (props) => {
	const { review, handleDelete } = props

	return (
    <ListItem
      sx={ sx.listItem }				
    >
      <ListItemIcon sx={sx.listItemIcon}>
        <UserAvatar user={review?.user} />
      </ListItemIcon>
				<ListItemText
					primary={
            <Rating readOnly sx={sx.rating} value={review.rating} />            						
					}
					secondary={
            <Stack direction="column" spacing={1}>
              <Typography
                variant="body1"
                color="text.primary"
              >
                {review?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={sx.reviewText}>
                {review.body}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={sx.caption}>
                {`@${review?.user?.username}`} reviewed{' '}
                {moment(review?.created_at).fromNow()}
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
    color: 'primary.main'
  },
	listItem: {
		alignItems: 'flex-start',
		'&:hover .MuiBox-root': {
			display: 'block',
		},
	},
	listItemIcon: {
		mt: 1,
    mr: 2
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
