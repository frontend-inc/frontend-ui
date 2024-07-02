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
import { UserChip, AvgRating, FavoriteButton, DisplayFields, Actions } from '../..'
import { CardProps } from '../../../types'

const ChipCard: React.FC<CardProps> = (props) => {
	const {
		resource,
		actions,
		displayFields = [],
		handleClick,		
		enableGradient = false,
		enableOverlay = false,
    enableUsers = false,
		enableFavorites = false,
    enableRatings = false,
	} = props

	const { title, image } = resource || {}

	return (
		<List
			dense
			disablePadding
			sx={ sx.root }
		>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
					<Stack direction="row" spacing={0} sx={sx.actions}>
						{enableFavorites == true && <FavoriteButton handle={resource?.handle} />}
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
                {enableRatings == true && (
                  <AvgRating resource={resource} size="small" />
                )}
              </Stack>
						}
						secondary={
              <>
                <DisplayFields fields={displayFields} resource={resource} />
                { enableUsers == true && (
                  <UserChip 
                    user={ resource?.user }
                  />
                )}
              </>
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default ChipCard

const sx = {
	root: {
		my: 0,
		p: 0,
    borderBottom: '1px solid',
    borderColor: 'divider',        
	},
	listItemButton: {
    p: 1,
		minHeight: 48,
    '&:hover': {
      bgcolor: 'transparent'
    }
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
