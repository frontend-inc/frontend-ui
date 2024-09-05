import React, { useState, useEffect } from 'react'
import {
	MenuItem,
	Typography,
	Card,
	CardActionArea,
	CardHeader,
} from '@mui/material'
import Image from 'next/image'
import { AttachmentImage, Label, MenuButton } from '../../../../components'

type StorageItemProps = {
	item?: any
	size?: number
	selected?: boolean
	handleClick?: (item: any) => void
	handleRemoveItem?: (item: any) => void
}

const StorageItem: React.FC<StorageItemProps> = (props) => {
	const { item, size = 180, selected, handleClick, handleRemoveItem } = props

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
					handleRemoveItem && (
						<MenuButton size="large">
							<MenuItem onClick={() => handleRemoveItem(item)}>
								<Typography variant="body2" color="textPrimary">
									Remove
								</Typography>
							</MenuItem>
						</MenuButton>
					)
				}
			/>
			<CardActionArea onClick={() => (handleClick ? handleClick(item) : null)}>
				{contentType == 'image' || contentType == 'video' ? (
					<Image
						height={size}
						width={size}
						src={item?.url}
						alt={item?.content_type}
						quality={100}
						style={{
							objectFit: 'cover',
						}}
					/>
				) : (
					<AttachmentImage icon="File" width={size} height={size} />
				)}
			</CardActionArea>
		</Card>
	)
}

export default StorageItem

const sx = {
	root: {
		borderRadius: 1,
		bgcolor: 'background.paper',
		border: '1px solid',
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
	},
	gradient: {
		backgroundImage:
			'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
		minWidth: '120px',
		height: '100%',
		backgroundSize: 'cover',
	},
	image: {
		objectFit: 'cover',
	},
}
