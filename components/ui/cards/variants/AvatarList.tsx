import React from 'react'
import {
	Avatar,
  Stack,
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { truncate } from '../../../../helpers'
import { CardProps } from '../../../../types'
import { Actions, DisplayFields, FavoriteButton } from '../../../../components'

const AvatarList: React.FC<CardProps> = (props) => {
	const {
		actions,
		resource,
    fields=[],
		height = 128,
		width = 128,
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
    enableFavorites = false
	} = props

	const { title, description, image } = resource || {}

	return (
		<List
			disablePadding
			sx={{
				...sx.listItem,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<ListItem
				disablePadding
				disableGutters
				secondaryAction={
          <Stack direction="row" alignItems="flex-end" mr={1}>            
            { enableFavorites && (
              <FavoriteButton
                handle={resource?.handle}
              />
            )}
            <Actions numVisible={0} actions={actions} resource={resource} />
          </Stack>
				}
			>
				<ListItemButton
					sx={{
						minHeight: height + 44,
					}}
					onClick={handleClick && handleClick}
				>
					<ListItemIcon sx={sx.listItemIcon}>
						<Avatar
							sx={{
								...sx.avatar,
								...(enableGradient && sx.gradient),
								...(enableOverlay && sx.overlay),
								height: `${height}px`,
								width: `${width}px`,
							}}
							src={image?.url}
							alt={title}
						>
							<Box />
						</Avatar>
					</ListItemIcon>
					<ListItemText
						primary={
							<Typography variant={'subtitle2'} color="text.primary">
								{title}
							</Typography>
						}
						secondary={
              <DisplayFields
                fields={fields}
                resource={resource}
              />							
						}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	)
}

export default AvatarList

const sx = {
	listItem: {
		my: 0,
		p: 0,
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
	listItemIcon: {
		width: 130,
		mr: 2,
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
	},
	avatar: {
		height: '64px',
		width: '64px',
		backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
	},
	description: {
		maxWidth: 320,
	},
}
