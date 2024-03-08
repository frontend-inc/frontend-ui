import React, { useContext } from 'react'
import {
	Box,
} from '@mui/material'
import { AppContext } from '../../../context'
import MobileDrawer from './MobileDrawer'
import MobileNav from './MobileNav'
import DesktopTopNav from './DesktopTopNav'
import DesktopSideNav from './DesktopSideNav'
import { MenuLink } from '../../..'

type HeaderProps = {
	editing?: boolean
	topNav?: boolean
	mode?: 'accent' | 'light' | 'dark'
	logo?: string
	enableAuth?: boolean
	enableShopify?: boolean
  enableNotifications?: boolean
	bgcolor?: string
	MenuLinks?: MenuLink[] 
	handleClick: (path: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { logo } = useContext(AppContext)
	const {
		topNav = false,
		editing = false,
		MenuLinks,
		handleClick,
		enableAuth = false,
		enableShopify = false,
    enableNotifications = false,
	} = props

	return (
    <Box
      sx={{ 
        ...sx.root, 
        ...(!topNav  && sx.rootSideNav) 
      }}
    >
      {topNav ? (
        <DesktopTopNav
          editing={editing}
          logo={logo}
          enableAuth={enableAuth}
          enableShopify={enableShopify}
          enableNotifications={enableNotifications}
          MenuLinks={MenuLinks}
          handleClick={handleClick}
        />
      ) : (
        <DesktopSideNav
          editing={editing}
          logo={logo}
          enableAuth={enableAuth}
          enableShopify={enableShopify}
          enableNotifications={enableNotifications}
          MenuLinks={MenuLinks}
          handleClick={handleClick}
        />
      )}
      <MobileNav
        editing={editing}
        logo={logo}          
        enableShopify={enableShopify}
        enableNotifications={enableNotifications}
        MenuLinks={MenuLinks}
        handleClick={handleClick}
      />
      <MobileDrawer
        editing={editing}
        enableAuth={enableAuth}
        enableShopify={enableShopify}
        MenuLinks={MenuLinks}
        handleClick={handleClick}
      />
    </Box>
	)
}

export default Header

const sx = {
  root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		overflow: 'hidden',
    bgcolor: 'background.default', 
  },
  rootSideNav: {       
    width: {
			sm: '280px',
			xs: '100%',
		},
		minWidth: {
			sm: '280px',
			xs: '100%',
		},
  },
}
