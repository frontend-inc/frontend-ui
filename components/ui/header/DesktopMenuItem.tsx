import React from 'react' 
import { Button } from '@mui/material'
import { Icon } from '../..'

type MenuItem = {
	label: string
	path: string
  url?: string
	icon?: string
  position: number
  children?: MenuItem[]
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

  return(
    <Button
      sx={sx.menuButton}
      onClick={() => handleClick(menuItem.path)}
      startIcon={
        showIcons && menuItem?.icon && (
          <Icon size={24} name={menuItem.icon} />
        )
      }
    >
      {menuItem.label}
    </Button>
  )
}

export default DesktopMenuItem

const sx = {
  menuButton: {
		justifyContent: 'flex-start',
		bgcolor: 'background.default',
		color: 'text.primary',
	}
}