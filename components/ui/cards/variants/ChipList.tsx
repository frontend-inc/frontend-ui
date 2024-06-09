import React from 'react'
import {
	Avatar,
	Box,
	Stack,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { AvgRating, FavoriteButton, DisplayFields, Actions } from '../../../../components'
import { CardProps } from '../../../../types'

const ChipList: React.FC<CardProps> = (props) => {
	const {
		resource,
		actions,
		displayFields = [],
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
    enableRatings = false,
	} = props

	const { title, image } = resource || {}

	return (
		<List
			dense
			disablePadding
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					<Stack direction="row" spacing={0} sx={sx.actions}>
						{enableFavorites && <FavoriteButton handle={resource?.handle} />}
						<Actions numVisible={0} actions={actions} resource={resource} />
					</Stack>
				}
			>
				<ListItemButton
					sx={sx.listItemButton}
					onClick={handleClick && handleClick}
				>
					{image && (
						<ListItemIcon sx={sx.listItemIcon}>
							<Avatar
								sx={{
									...sx.avatar,
									...(enableGradient && sx.gradient),
									...(enableOverlay && sx.overlay),
								}}
								src={image?.url}
								alt={title}
							>
								<Box />
							</Avatar>
						</ListItemIcon>
					)}
					<ListItemText
						primary={
							<Stack direction="column" spacing={0}>              
                <Typography variant="body1" color="text.primary">
                  {title}
                </Typography>
                {enableRatings && (
                  <AvgRating resource={resource} size="small" />
                )}
              </Stack>
						}
						secondary={
              <DisplayFields fields={displayFields} resource={resource} />
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default ChipList

const sx = {
	root: {
		my: 0,
		p: 0,
	},
	listItemButton: {
		minHeight: 48,
	},
	gradient: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
	},
	avatar: {
		height: '48px',
		width: '48px',
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
	listItemIcon: {
		mr: 2,
		height: '48px',
		width: '48px',
	},
	actions: {
		px: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
}
