import React, { useState, useEffect } from 'react'
import {
	MenuItem,
	Typography,
	Box,
	Card,
	CardActionArea,
	CardHeader,
} from '@mui/material'
import { Image, AttachmentImage, Label, MenuButton } from '../../../components'

type MediaItemProps = {
	item?: any
	size?: number
	selected?: boolean
	handleClick?: (item: any) => void
	handleRemove?: () => void
}

const MediaItem: React.FC<MediaItemProps> = (props) => {
	const { item, size = 180, selected, handleClick, handleRemove } = props

	const [contentType, setContentType] = useState('')

	useEffect(() => {
		setContentType(item?.content_type?.split('/')[0])
	}, [item])

	return (
		<Card
			sx={{
				...sx.root,
				...(selected && sx.selected),
			}}
		>
			<CardHeader
				sx={sx.header}
				title={<Label label={item?.content_type?.split('/')[1]} />}
				action={
					handleRemove && (
						<MenuButton>
							<MenuItem onClick={handleRemove}>
								<Typography variant="body2" color="textPrimary">
									Remove
								</Typography>
							</MenuItem>
						</MenuButton>
					)
				}
			/>
			{contentType == 'image' || contentType == 'video' ? (
				<Box sx={sx.image}>
					<Image
						disableBorderRadius
						height={size}
						width={size}
						src={item?.url}
						alt={item?.content_type}
						objectFit={'contain'}
						handleClick={() => (handleClick ? handleClick(item) : null)}
					/>
				</Box>
			) : (
				<AttachmentImage icon="File" width={size} height={size} />
			)}
		</Card>
	)
}

export default MediaItem

const sx = {
	root: {
		borderRadius: 1,
		bgcolor: 'background.paper',
		borderColor: 'divider',
		p: 0,
		minWidth: '120px',
		height: 200,
	},
	selected: {
		borderColor: 'primary.main',
	},
	header: {
		py: 0,
		px: 1,
		alignItems: 'center',
	},
	gradient: {
		backgroundImage:
			'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
		minWidth: '120px',
		height: '100%',
		backgroundSize: 'cover',
	},
	image: {
		height: 160,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
}
