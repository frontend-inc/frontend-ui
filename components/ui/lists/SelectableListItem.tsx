import React from 'react'
import {
  Box,
  Typography,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from '@mui/material'
import { Icon } from 'frontend-ui/components'

type SelectableListItemProps = {
	selected?: boolean
	title: string
	description?: string
  image?: string
	icon?: string
  color?: string
	handleClick?: () => void
}

const SelectableListItem: React.FC<SelectableListItemProps> = (props) => {
	const { 
    selected, 
    title, 
    description, 
    handleClick,    
    icon, 
    color, 
  } = props

	return (
		<ListItem
			sx={{
				...sx.root,
				...(selected && sx.selected),
			}}
		>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
        { icon && (
          <ListItemIcon sx={ sx.listItemIcon }>
            { color ? (
              <Box 
                sx={{ 
                  ...sx.iconContainer,
                  bgcolor: color 
                }}
              >
                <Icon name={icon} />
              </Box>
            ):(					  
              <Icon name={icon} />            
            )}
          </ListItemIcon>
        )}
				<ListItemText 
          primary={
            <Typography variant="body1" color="text.primary">
              { title }
            </Typography>
          } 
          secondary={
            <Typography variant="body2" color="text.secondary">
              { description }
            </Typography>
          } 
        />
			</ListItemButton>
		</ListItem>
	)
}

export default SelectableListItem

const sx = {
	root: {
    width: '100%',
		p: 0,
		borderRadius: 1,
		border: '3px solid',
		borderColor: 'divider',
		mb: 1,
		bgcolor: 'background.paper',
		'&:hover': {
			borderColor: 'primary.main',
		},
	},
  listItemIcon: {
    mr: 1
  },
	selected: {
		borderColor: 'primary.main',
	},
	listItemButton: {
		p: 1,
		px: 2,
	},
  iconContainer: {
    p: '5px',
    mr: 1,
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    bgcolor: 'primary.main',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  }
}
