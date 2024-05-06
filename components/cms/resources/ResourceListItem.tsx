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
import { UserAvatar, Image, Icon, MenuButton } from '../..'
import { get } from 'lodash'

export type ResourceListItemProps = {
  resource: any
  handleClick: (resource: any) => void
  handleEdit: (resource: any) => void
  handleDelete: (resource: any) => void
  colorField?: string 
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
    colorField='color',
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
    <List sx={ sx.root }>
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
                  bgcolor: get(resource, colorField) 
                }}         
              >
                <Icon 
                  name={ get(resource, iconField) }               
                  size={24} 
                /> 
              </Avatar>            
            </ListItemIcon>
          )}  
          { resource?.user && (
            <ListItemIcon sx={ sx.listItemIcon }> 
              <UserAvatar user={ resource?.user } />         
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
    p: 0,
    m: 0
  },
  listItemButton: {
    p: 1,
    borderRadius: theme => `${theme.shape.borderRadius}px`
  },
  actions: {
    alignItems: 'center'
  },
  listItemIcon: {
    mr: 2
  }
}
