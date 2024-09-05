import React from 'react'
import {
	Typography,
	ListItem,
	ListItemIcon,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import { PublishLabel } from '../../../../components'
import { Image } from '../../../../components'
import { truncate } from '../../../../helpers'

type DocumentListItemProps = {
	document?: any
	handleClick?: () => void
	selected?: boolean
}

const DocumentListItem: React.FC<DocumentListItemProps> = (props) => {
	const { document, handleClick, selected = false } = props

	return (
		<ListItem
			sx={{
				...sx.listItem,
				...(selected && sx.selected),
			}}
			secondaryAction={<PublishLabel published={document?.published} />}
		>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon sx={sx.listItemIcon}>
					<Image
						src={document?.image?.url}
						alt={document?.title}
						height={72}
						disableBorder
						disableBorderRadius
					/>
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography variant="body2" color="text.primary" sx={sx.title}>
							{truncate(document?.title)}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default DocumentListItem

const sx = {
	listItem: {
		bgcolor: 'background.paper',
		borderRadius: 1,
		border: '2px solid',
		borderColor: 'divider',
		transition: 'border-color 0.2s ease-in-out',
		p: 0,
		mb: 1,
		overflow: 'hidden',
	},
	listItemButton: {
		p: 0,
	},
	listItemIcon: {
		width: 72,
		mr: 2,
	},
	title: {
		maxWidth: 146,
	},
	selected: {
		borderColor: 'primary.main',
	},
}
