import React from 'react'
import {
	Stack,
	Box,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,	
	Checkbox,
  Typography
} from '@mui/material'
import { Image, Label,  MenuButton } from '../..'

export type ResourceListItemProps = {
	selectable?: boolean
	selected?: boolean
	primary: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	layout?: 'list' | 'grid'
  label?: string
	title?: string | React.ReactNode
	description?: string
	image?: string
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
  handleReload?: () => void
	secondaryAction?: React.ReactNode
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
    label,
		primary,
		secondary,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		secondaryAction,
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
				...(enableBorder && sx.border),
        ...(selected && sx.selected),
      }}
    >
      <CardHeader 
        sx={ sx.cardHeader }
        avatar={ avatar }  
        title={ 
          selectable && (
            <Checkbox
              size='small'
              checked={selected}
              onChange={handleChange}
              color="primary"
              sx={sx.checkbox}
            />
          )
        }
        action={
          <Stack direction="row" spacing={1} sx={sx.buttons}>
            {secondaryAction}
            {(menuActions || handleEdit || handleDelete) && (
              <MenuButton size="small" handleEdit={handleEdit} handleDelete={handleDelete}>
                {menuActions}
              </MenuButton>
            )}
          </Stack>
        }
      />      
      <CardActionArea onClick={ handleClick }>
        <Image 
          label={label}
          disableBorderRadius          
          height={160}
          src={ image }
        />
      </CardActionArea>
        {(primary || secondary) && (
          <CardContent>
            <Typography variant="subtitle2" color="text.primary">
              { primary }
            </Typography>
            { secondary && (
            <Typography variant="body2" color="text.secondary">
              { secondary }
            </Typography>   
            )}       
          </CardContent>
        )}
    </Card>
	)
}

export default ResourceGridItem

const sx = {
	root: {
		p: 0,
    border: '1px solid',
    borderColor: 'transparent',
		borderRadius: 1,
		overflow: 'hidden',    
    bgcolor: 'background.paper',    
	},  
  selected: {
    border: '1px solid',
    borderColor: 'primary.main',
  },
	border: {
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
  cardHeader: {
    height: 50
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
