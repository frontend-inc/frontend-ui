import React from 'react'
import { Label } from '../../../../components'
import {
	ListItem,
	ListItemIcon,
	ListItemButton,
	ListItemText,
} from '@mui/material'
import Image from 'next/image'

type MediaListItemProps = {
	item?: any
	handleClick?: () => void
	selected?: boolean
}

const MediaListItem: React.FC<MediaListItemProps> = (props) => {
	const { item, handleClick, selected = false } = props

	return (
		<ListItem
			sx={{
				...sx.listItem,
				...(selected && sx.selected),
			}}
			secondaryAction={<Label label={`${item?.width}x${item?.height}`} />}
		>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<Image
						height={50}
						width={50}
						src={item?.thumbnail_url}
						alt={item?.title}
						style={{
							width: '100%',
							objectFit: 'cover',
						}}
					/>
				</ListItemIcon>
				<ListItemText primary={<Label label={item?.content_type} />} />
			</ListItemButton>
		</ListItem>
	)
}

export default MediaListItem

const sx = {
	listItem: {
		borderRadius: 1,
		bgcolor: 'background.paper',
		border: '1px solid',
		borderColor: 'divider',
		transition: 'border-color 0.2s ease-in-out',
		p: 0,
		mb: 1,
	},
	selected: {
		borderColor: 'primary.main',
	},
	image: {
		marginRight: '10px',
		objectFit: 'contain',
	},
}
