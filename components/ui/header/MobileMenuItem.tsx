import React, { useState } from 'react' 
import { 
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import { Icon } from '../..'
import { Add } from '@mui/icons-material'

type MenuItem = {
	name: string
	path: string
  url?: string
	icon?: string  
  position: number
  parent_id?: number | null
  children?: MenuItem[]
}

type SubmenuItem = {
  menuItem: MenuItem
  handleClick: (path: string) => void
}

const MobileSubmenuItem: React.FC<SubmenuItem> = (props) => {

  const { menuItem, handleClick } = props 

  return(
    <ListItem 
      sx={ sx.subLink }
      disablePadding>
      <ListItemButton               
        onClick={() => handleClick(menuItem.path)}
    >
      <ListItemText 
        primary={            
          <Typography variant="button" color="text.primary">
            {menuItem.name }
          </Typography>
        }
      />
    </ListItemButton>
  </ListItem>
  )
}

type MobileMenuItemProps = {
  menuItem: MenuItem  
  handleClick: (path: string) => void
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = (props) => {

  const {
    menuItem,
    handleClick,
  } = props

  const { children } = menuItem
  const [open, setOpen] = useState(false)
  
  const handleMenuClick = (menuItem: MenuItem) => {
    if(children?.length > 0) {
      setOpen(!open)
    }else{
      handleClick(menuItem.path)
    }
  }

  return(
    <>
      <ListItem
        disablePadding
        disableGutters
        secondaryAction={ 
          children?.length > 0 && (
              <Add 
                sx={{ 
                  ...sx.icon,
                  ...(open && sx.rotateIcon )
                }}
              />
          )  
        }
      >
        <ListItemButton       
          onClick={() => handleMenuClick(menuItem)}
      >
        <ListItemText 
          primary={ 
            <Typography variant="button" color="text.primary">
              {menuItem.name }
            </Typography>
          }            
        />
      </ListItemButton>
    </ListItem>
    <Collapse in={open}>
      <List>
        {children?.map((child, index) => (
          <MobileSubmenuItem
            key={index}
            menuItem={child}
            handleClick={handleClick}
          />
        ))}
      </List>
    </Collapse>
    </>
  )
}

export default MobileMenuItem

const sx = {
  icon: {
    transition: 'transform 0.3s ease-in-out',
  },
  rotateIcon: {
    transform: 'rotate(90deg)',
  },
  subLink: {
    pl: 3,
  }
}