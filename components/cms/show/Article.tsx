import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Actions, Image } from '../../../components'
import { ActionType, DocumentType } from '../../../types'
import moment from 'moment'

type ArticleProps = {
	actions?: ActionType[]
	resource: DocumentType
}

const Article: React.FC<ArticleProps> = (props) => {
	const { actions, resource } = props || {}
	const { title, image, description, data } = resource || {}
	const { published_at } = data || {}
	return (
		<Stack sx={sx.root} spacing={7}>
			<Stack spacing={3} sx={sx.header}>
				<Typography color="text.primary" variant="h3">
					{title}
				</Typography>
				<Typography color="text.secondary" variant="caption">
					{moment(published_at).format('MMMM D, YYYY')}
				</Typography>
			</Stack>
			<Image src={image?.url} alt={title} height={400} />
			<Box sx={sx.content}>
				<Typography variant="body1" color="text.primary" sx={sx.text}>
					{description}
				</Typography>
			</Box>
			{actions && <Actions actions={actions} resource={resource} />}
		</Stack>
	)
}

export default Article

const sx = {
	root: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
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
}
