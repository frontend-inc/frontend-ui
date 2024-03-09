import React from 'react' 
import { 
  Button, 
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { useMenu } from '../../../hooks'
import { MenuLink } from '../../..'
import { ExpandMore } from '@mui/icons-material'

type SubmenuItem = {
  menuItem: MenuLink
  handleClick: () => void
}

const DesktopSubmenuItem: React.FC<SubmenuItem> = (props) => {

  const { menuItem, handleClick } = props 

  return(
    <MenuItem
      // @ts-ignore 
      onClick={() => handleClick(menuItem.path)}
    >
      <Typography variant="button" color="text.primary">
        { menuItem.name }
      </Typography>
    </MenuItem>
  )
}

type DesktopMenuItemProps = {
  menuItem: MenuLink  
  handleClick: () => void
}

const DesktopMenuItem: React.FC<DesktopMenuItemProps> = (props) => {

  const {
    menuItem,
    handleClick,
  } = props

  const { children } = menuItem

  const { open, openMenu, closeMenu, anchorEl } = useMenu()

  const handleMenuClick = (ev) => {
    if(children?.length > 0) {
      openMenu(ev)
    }else{
      //@ts-ignore
      handleClick(menuItem.path)
    }
  }
  
  const handleMouseLeave = () => {
    closeMenu()
  }

  return(
    <>
      <Button
        sx={sx.menuButton}
        onClick={ handleMenuClick }
        endIcon={
          children?.length > 0 && (
            <ExpandMore 
              sx={{ 
                ...sx.icon,
                ...(open && sx.rotateIcon)
              }}
            />
          )
        }  
      >
        {menuItem.name}
      </Button>
      <Menu 
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenu}
        MenuListProps={{
          onMouseLeave: handleMouseLeave,
        }}
      >      
        {children?.map((child, index) => (
          <DesktopSubmenuItem
            key={index}
            menuItem={child}
            handleClick={handleClick}
          />
        ))}
      </Menu>
    </>
  )
}

export default DesktopMenuItem

const sx = {
  buttonGroup: {
    borderRight: 'none !important'
  },
  menuButton: {
    cursor: 'pointer',
		justifyContent: 'flex-start',
		bgcolor: 'background.default',
		color: 'text.primary',    
    borderRight: 'none !important'
	},
  iconButton: {
    '&:hover': {
      bgcolor: 'transparent'
    }
  },
  icon: {
    transition: 'transform 0.2s ease-in-out',
  },
  rotateIcon: {
    transform: 'rotate(-180deg)',
  },
}