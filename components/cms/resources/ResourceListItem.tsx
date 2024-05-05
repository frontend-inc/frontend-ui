import React from 'react' 
import {  
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon, 
  Typography
} from '@mui/material'
import { Image, Icon, MenuButton } from '../..'
import { get } from 'lodash'

export type ResourceListItemProps = {
  resource: any
  handleClick: (resource: any) => void
  handleEdit: (resource: any) => void
  handleDelete: (resource: any) => void
  color?: string 
  secondaryActions?: React.ReactNode 
  menuActions?: any
  titleField?: string
  descriptionField?: string
  imageField?: string
  iconField?: string
}

const ResourceListItem: React.FC<ResourceListItemProps> = (props) => {

  const { 
    resource, 
    color='primary',
    titleField='title',
    descriptionField='description',
    imageField='image.url',
    iconField='icon',
    handleClick, 
    handleEdit, 
    handleDelete,
    secondaryActions,
    menuActions 
  } = props 

  return(
    <List>
    <ListItem 
      disablePadding
      secondaryAction={
        <Stack direction="row" spacing={1} sx={ sx.actions }>
          { secondaryActions }
          <MenuButton 
            handleEdit={ handleEdit }
            handleDelete={ handleDelete }
          >
            { menuActions }
          </MenuButton>
        </Stack>
      }
    >
      <ListItemButton 
        sx={ sx.listItemButton }
        onClick={() => handleClick(resource) }
      >
        { get(resource, imageField) && (
          <ListItemIcon sx={ sx.listItemIcon }>          
            <Image 
              src={ get(resource, imageField) }
              width={ 32 }
              height={ 32 }
              alt={ get(resource, titleField) } 
            />          
          </ListItemIcon>
        )}          
        { get(resource, iconField) && (
          <ListItemIcon sx={ sx.listItemIcon }> 
            <Avatar 
              sx={{
                bgcolor: color 
              }}         
            >
              <Icon 
                name={ get(resource, iconField) }               
                size={24} 
              /> 
            </Avatar>            
          </ListItemIcon>
        )}          
      <ListItemText 
        primary={ 
          <Typography variant="body1" color='text.primary'>
            { get(resource, titleField) }
          </Typography>
        }
        secondary={ 
          <Typography variant="body2" color='text.secondary'>
            { get(resource, descriptionField) }
          </Typography>
        }
      />      
      </ListItemButton>
    </ListItem>    
    </List>
  )
}

export default ResourceListItem 

const sx = {
  root: {
    border: '2px solid blue'
  },
  listItemButton: {
    p: 0
  },
  actions: {
    justifyContent: 'center'
  },
  listItemIcon: {
    mr: 2
  }
}
