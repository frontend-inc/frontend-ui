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
import { Label, MenuButton } from '../../..'
import { truncate } from '../../../../helpers'
import { CardProps } from '../../../../types'

const ChipList: React.FC<CardProps> = (props) => {
	const {
		title,
		image,
		handleClick,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,
	} = props

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
          <Stack direction="row" spacing={1} sx={ sx.actions }>
            {(enableEdit || enableDelete) && (
              <MenuButton
                icon='EllipsisVertical'
                handleEdit={ enableEdit ? handleEdit : undefined }
                handleDelete={ enableDelete ? handleDelete : undefined }
              />
            )}
          </Stack>
        }  
      >        
				<ListItemButton
					sx={sx.listItemButton}
					onClick={handleClick && handleClick}
				>
          { image && (
            <ListItemIcon>
              <Avatar
                sx={{
                  ...sx.avatar,
                  ...(enableGradient && sx.gradient),
                  ...(enableOverlay && sx.overlay),
                }}
                src={image}
                alt={title}
              >
                <Box />
              </Avatar>
            </ListItemIcon>
          )}
					<ListItemText
						primary={
							<Typography variant='body1' color="text.primary">
								{title}
							</Typography>
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
		minHeight: 50,
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
		mr: 2,
		height: '32px',
		width: '32px',
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
  actions: {
    px: 1
  }
}
