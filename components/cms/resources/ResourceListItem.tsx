import React from 'react'
import {
	Stack,
	Avatar,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
  Checkbox
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
	secondaryActions?: React.ReactNode
	menuActions?: any
	sortable?: boolean
	isDragging?: boolean
	enableBorder?: boolean
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {
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
    console.log(event.target.checked)
    if(handleSelect){
      handleSelect()
    }    
  }

	return (
		<ListItem
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				...(isDragging && sx.isDragging),
			}}
			disablePadding
			secondaryAction={
				<Stack direction="row" spacing={1} sx={sx.buttons}>
					{secondaryActions}
					{(menuActions || handleEdit || handleDelete) && (
						<MenuButton handleEdit={handleEdit} handleDelete={handleDelete}>
							{menuActions}
						</MenuButton>
					)}
				</Stack>
			}
		>
      {selectable && (
        <ListItemIcon sx={sx.checkbox}>
          <Checkbox 
            checked={selected} 
            color="primary" 
            size="small"             
            onChange={ handleChange }
          />
        </ListItemIcon>
      )}
			<ListItemButton
				sx={sx.listItemButton}
				onClick={handleClick ? handleClick : undefined}
			>        
				{sortable && (
					<ListItemIcon sx={sx.dragHandle}>
						<Icon name="GripVertical"  color="text.secondary" />
					</ListItemIcon>
				)}
				{avatar && <ListItemIcon sx={sx.listItemIcon}>{avatar}</ListItemIcon>}
				{!avatar && image && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Image src={image} width={32} height={32} alt={image} />
					</ListItemIcon>
				)}
				{icon && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Avatar
							sx={{
								bgcolor: color,
							}}
						>
							<Icon name={icon} size={24} color={'primary.contrastText'} />
						</Avatar>
					</ListItemIcon>
				)}
				<ListItemText primary={primary} secondary={secondary} />
			</ListItemButton>
		</ListItem>
	)
}

export default ResourceListItem

const sx = {
	root: {
		p: 0,
		borderRadius: 1,
		overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
		mb: 1,
	},
	listItemButton: {
		p: 1,
		borderRadius: 1,
	},
	buttons: {
		alignItems: 'center',
	},
	listItemIcon: {
		mr: 2,
	},
  checkbox: {
    width: 24
  },
	dragHandle: {
		width: 24,
		cursor: 'grab',
		'&:active': {
			cursor: 'grabbing',
		},
	},
	isDragging: {
		border: '2px solid red',
	},
}
