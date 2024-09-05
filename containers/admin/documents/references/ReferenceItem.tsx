import React from 'react'
import { Box, MenuItem, Typography } from '@mui/material'
import { Image, Icon, Label, MenuButton } from '../../../../components'
import { PublishLabel } from '../../../../components'
import { truncate } from '../../../../helpers'

type SortableReferenceItemProps = {
	item: any
	handleEditItem: (item: any) => void
	handleRemoveItem: (item: any) => void
}

const SortableReferenceItem: React.FC<SortableReferenceItemProps> = (props) => {
	const { item, handleEditItem, handleRemoveItem } = props
	const { target } = item || {}
	return (
		<Box
			//@ts-ignore
			sx={{
				...sx.root,
				...(item.isDragging && sx.isDragging),
			}}
		>
			<Box sx={sx.dragHandle}>
				<Icon name="GripVertical" />
			</Box>
			<Box sx={sx.imageContainer}>
				<Image
					src={target?.image?.url}
					alt={target?.title}
					height={72}
					disableBorder
					disableBorderRadius
				/>
			</Box>
			<Box sx={sx.content}>
				<Box sx={sx.contentHeader}>
					<Box sx={sx.leftContent}>
						<Label
							darkMode
							color="background.main"
							label={target?.content_type}
						/>
					</Box>
					<Box sx={sx.rightContent}>
						<Box sx={sx.secondaryActions}>
							<PublishLabel published={target?.published} />
							<MenuButton>
								<MenuItem onClick={() => handleEditItem(target)}>
									<Typography variant="body2" color="textPrimary">
										Edit
									</Typography>
								</MenuItem>
								<MenuItem onClick={() => handleRemoveItem(item)}>
									<Typography variant="body2" color="textPrimary">
										Remove
									</Typography>
								</MenuItem>
							</MenuButton>
						</Box>
					</Box>
				</Box>
				<Box sx={sx.contentBody}>
					<Typography sx={sx.title} variant="body1" color="textPrimary">
						{truncate(target?.title)}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default SortableReferenceItem

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		bgcolor: 'background.paper',
		borderRadius: 1,
		border: '2px solid',
		borderColor: 'divider',
		p: 0,
		mb: 1,
		width: '100%',
	},
	content: {
		width: '100%',
	},
	contentHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		px: 1,
	},
	contentBody: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		flexGrow: 1,
		px: 1,
		pb: 1,
	},
	leftContent: {
		display: 'flex',
		flexDirection: 'row',
		flexGrow: 1,
	},
	rightContent: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	},
	imageContainer: {
		width: 72,
	},
	dragHandle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '30px',
		bgcolor: 'background.default',
		borderRadius: '8px 0 0 8px',
	},
	icon: {
		color: 'primary.main',
	},
	secondaryIcon: {
		color: 'text.secondary',
	},
	isDragging: {
		bgcolor: 'background.paper',
	},
	visibilityIcon: {
		height: 20,
		width: 20,
		color: 'secondary.main',
	},
	title: {
		fontSize: 15,
		fontWeight: 500,
	},
	secondaryActions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
}
