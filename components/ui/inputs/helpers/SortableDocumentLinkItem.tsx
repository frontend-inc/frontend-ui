import React from 'react'
import { Typography, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Image, MenuButton } from '../../../../components'

type SortableListItemProps = {
  image?: string
	title: string
	subtitle?: string
	isDragging?: boolean
  handleDelete: () => void
  handleEdit: () => void
}

const SortableDoccumentLinkItem: React.FC<SortableListItemProps> = (props) => {
	
  const { 
    image,
    title, 
    subtitle, 
    isDragging,
    handleDelete,
    handleEdit 
  } = props

	return (
		<ListItem
			disableGutters
			sx={{
				...sx.item,
				...(isDragging && sx.isDragging),
			}}
      secondaryAction={
        <MenuButton 
          handleDelete={ handleDelete }
          handleEdit={ handleEdit }
        />
      }
		>      
      <ListItemIcon sx={ sx.listItemIcon }>
        <Image 
          src={image}
          height={32}
          width={32}
        />
      </ListItemIcon>
			<ListItemText 
        primary={
          <Typography variant='body1' color='text.primary'>
            { title }
          </Typography>
        } 
      />
		</ListItem>
	)
}

export default SortableDoccumentLinkItem

const sx = {
	item: {
    px: 1,
    bgcolor: 'background.paper',
    transition: 'box-shadow 0.2s',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1,
    my: 0.5,
    '&:hover': {      
      boxShadow: 2
    }
	},
	icon: {
		color: 'text.secondary',
	},
	isDragging: {
    boxShadow: 2
  },
  listItemIcon: {
    mr: 2
  }
}
