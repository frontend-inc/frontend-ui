import React from 'react' 
import { 
  Button, 
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { Icon } from '../..'
import { useMenu } from '../../../hooks'

type MenuItem = {
	label: string
	path: string
  url?: string
	icon?: string
  position: number
  children: MenuItem[]
}

type SubmenuItem = {
  menuItem: MenuItem
  handleClick: () => void
}

const DesktopSubmenuItem: React.FC<SubmenuItem> = (props) => {

  const { menuItem, handleClick } = props 

  return(
    <MenuItem>
      <Typography variant="button" color="text.primary">
        { menuItem.label }
      </Typography>
    </MenuItem>
  )
}

type DesktopMenuItemProps = {
  menuItem: MenuItem  
  handleClick: (path: string) => void
  showIcons?: boolean
}

const DesktopMenuItem: React.FC<DesktopMenuItemProps> = (props) => {

  const {
    menuItem,
    handleClick,
    showIcons = true,
  } = props

  const { children } = menuItem

  const { open, openMenu, closeMenu, anchorEl } = useMenu()

  const handleMenuClick = (ev) => {
    if(children?.length > 0) {
      openMenu(ev)
    }else{
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
          <Icon size={24} name="ChevronDown" />
        )
      }  
    >
      {menuItem.label}
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
            showIcons={showIcons}
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
  }
}