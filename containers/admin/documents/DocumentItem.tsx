import React from 'react'
import { Box, MenuItem, Typography } from '@mui/material'
import { Label, MenuButton } from '../../../components'
import { PublishLabel } from '../../../components'
import { DragIndicator } from '@mui/icons-material'
import { truncate } from '../../../helpers'

type DocumentItemProps = {
	item?: any
	handleEditItem: (item: any) => void
	handleRemoveItem: (item: any) => void
	enableCssFix?: boolean
}

const DocumentItem: React.FC<DocumentItemProps> = (props) => {
	const { item, handleEditItem, handleRemoveItem, enableCssFix = true } = props

	return (
		<Box
			//@ts-ignore
			sx={{
				...sx.root,
				...(item.isDragging && sx.isDragging),
				...(item.isDragging && enableCssFix && sx.cssFix),
			}}
		>
			<Box sx={sx.dragHandle}>
				<DragIndicator sx={sx.secondaryIcon} />
			</Box>
			<Box sx={sx.content}>
				<Box sx={sx.contentHeader}>
					<Box sx={sx.leftContent}>
						<Label label={item?.content_type} />
					</Box>
					<Box sx={sx.rightContent}>
						<Box sx={sx.secondaryActions}>
							<PublishLabel published={item?.published} />
							<MenuButton>
								<MenuItem onClick={() => handleEditItem(item)}>
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
						{truncate(item?.title)}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default DocumentItem

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		bgcolor: 'background.paper',
		borderRadius: 1,
		border: '1px solid',
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
		alignItems: 'flex-end',
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
	dragHandle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '30px',
		borderRight: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.hover',
		borderRadius: 1,
	},
	cssFix: {
		ml: [0, '260px'],
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
