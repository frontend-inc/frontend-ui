import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Link, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import {
	UserChip,
	AvgRating,
	CommentButton,
	FavoriteButton,
  LikeButton,
	DisplayFields,
	Actions,
} from '../..'

const CardList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		displayFields = [],
		href,
		handleClick,
		enableUsers = false,
		enableComments = false,
		enableFavorites = false,
    enableLikes = false,
		enableRatings = false,
	} = props || {}

	const router = useRouter()

	const { title, description } = resource || {}

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box sx={sx.root}>
			<Stack direction="row" spacing={1}>
				<Stack direction="column" spacing={1} sx={sx.content}>
					<Link sx={sx.link} onClick={handleItemClick}>
						<Typography color="text.primary" variant='subtitle2'>
							{truncate(title)}
						</Typography>
					</Link>
					{enableRatings == true && (
						<AvgRating resource={resource} size="small" />
					)}
					<DisplayFields fields={displayFields} resource={resource} />
					<Typography
						color="text.secondary"
						variant="body2"
						sx={sx.description}
					>
						{truncate(description, 200)}
					</Typography>
					{enableUsers == true && <UserChip user={resource?.user} />}

          <Stack direction="row">
            {enableLikes == true && (
              <LikeButton handle={resource?.handle} />
            )}
            {enableFavorites == true && (
              <FavoriteButton handle={resource?.handle} />
            )}
            {enableComments == true && <CommentButton resource={resource} />}
          </Stack>
				</Stack>
			</Stack>
			<Stack direction="row" justifyContent="flex-end" sx={sx.actions}>
				<Actions numVisible={0} actions={actions} resource={resource} />
			</Stack>
		</Box>
	)
}

export default CardList

const sx = {
	root: {
		py: 1,
    minHeight: 140,
		position: 'relative',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
		cursor: 'auto',
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	container: {
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	description: {
		maxWidth: '600px',
	},
	actions: {
		position: 'absolute',
		top: 10,
		right: 10,
	},
	link: {
		cursor: 'pointer',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}
