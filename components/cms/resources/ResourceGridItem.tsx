import React from 'react'
import {
	Stack,
	Avatar,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActionArea,	
  Typography,
	Checkbox,
} from '@mui/material'
import { Image, Icon, MenuButton } from '../..'

export type ResourceListItemProps = {
	selectable?: boolean
	selected?: boolean
	primary: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	layout?: 'list' | 'grid'
	title?: string | React.ReactNode
	description?: string
	image?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
  handleReload?: () => void
	secondaryActions?: React.ReactNode
	menuActions?: any
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
}

const ResourceGridItem: React.FC<ResourceListItemProps> = (props) => {
	const {
		icon,
		avatar,
		color,
		primary,
		secondary,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		secondaryActions,
		menuActions,
		sortable,
		selectable,
		selected,
		isDragging = false,
		enableBorder = false,
	} = props

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (handleSelect) {
			handleSelect()
		}
	}

	return (

    <Card
      sx={{
        ...sx.root,
				...(enableBorder && sx.rootBorder),
      }}
    >
      <CardHeader 
        avatar={ avatar }  
        title={ primary }
        subheader={ secondary }        
        action={
          <Stack direction="row" spacing={1} sx={sx.buttons}>
            {secondaryActions}
            {(menuActions || handleEdit || handleDelete) && (
              <MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
                {menuActions}
              </MenuButton>
            )}
          </Stack>
        }
      />      
      <CardActionArea onClick={ handleClick }>
        <CardMedia 
          sx={{ height: 160 }}
          image={ image }
        />
      </CardActionArea>
    </Card>
	)
}

export default ResourceGridItem

const sx = {
	root: {
		p: 0,
		borderRadius: 1,
		overflow: 'hidden',    
    bgcolor: 'background.paper',    
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',		
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: 1
    },
		mb: 1,
	},
	listItemButton: {
		p: 1,
		borderRadius: 1,
	},
	avatar: {
		borderRadius: 1,
	},
	buttons: {
		alignItems: 'center',
	},
	listItemIcon: {
		mr: 2,
	},
	checkbox: {
		width: 24,
	},
	dragHandle: {
		width: 24,
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
  isDragging: {
    boxShadow: 2,
  }
}
