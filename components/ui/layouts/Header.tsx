import React, { useContext } from 'react'
import {
	Stack,
	AppBar,
	Button,
	Box,
	Hidden,
	Toolbar,
	IconButton,
} from '@mui/material'
import { AuthButton, Logo, Icon, Drawer, MenuItem } from '../../../components'
import { ShopifyAuth, SearchButton, CartButton } from '../../../components/shopify'
import { AppContext } from '../../../context'
import { HEADER_LOGO_HEIGHT, HEADER_LOGO_WIDTH } from '../../../constants/index'

type MenuItem = {
	label: string
	path: string
	icon?: string
}

type DesktopNavProps = {
	editing?: boolean
	logo?: string
	logoWidth?: number
	logoHeight?: number
	menuItems?: {
		label: string
		path: string
		icon?: string
	}[]
	enableAuth?: boolean
	enableShopify?: boolean
  enableNotifications?: boolean
	handleClick: (path: string) => void
	position?: 'fixed' | 'relative' | 'absolute'
	showIcons?: boolean
}

const DesktopTopNav = (props: DesktopNavProps) => {
	
  const { clientUrl } = useContext(AppContext)
	const {
		editing,
		logo,
		menuItems,
		logoWidth = HEADER_LOGO_WIDTH,
		logoHeight = HEADER_LOGO_HEIGHT,
		handleClick,
		enableAuth = false,
		enableShopify = false,
    enableNotifications = false,
		position = 'absolute',
		showIcons = true,
	} = props

	return (
		<Hidden smDown>
			<AppBar 
        sx={{ 
          ...sx.appBar,
          ...(enableNotifications && sx.appBarNotifications)
        }} 
        position={position} 
        elevation={0}
      >
				<Toolbar>
					<Box sx={sx.desktopTopNav}>
						<Box sx={sx.leftMenu}>
							<Logo
								src={logo}
								width={logoWidth}
								height={logoHeight}
							/>
						</Box>
						<Box sx={sx.centerMenu}>
							{menuItems?.map((menuItem, index) => (
								<Button
									key={index}
									sx={sx.menuButton}
									onClick={() => handleClick(menuItem.path)}
									startIcon={
										showIcons && <Icon size={24} name={menuItem.icon} />
									}
								>
									{menuItem.label}
								</Button>
							))}
						</Box>
						<Box sx={sx.rightMenu}>
							{enableAuth && (
								<AuthButton
									editing={editing}
									myAccountUrl={`${clientUrl}/my-account`}
								/>
							)}
							{enableShopify && (
								<>
                	<ShopifyAuth editing={editing} />
									<SearchButton editing={editing} />
									<CartButton editing={editing} />
								</>
							)}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Hidden>
	)
}

const DesktopSideNav = (props: DesktopNavProps) => {
	const { clientUrl } = useContext(AppContext)
	const {
		editing,
		logo,
		menuItems,
		logoWidth = HEADER_LOGO_WIDTH,
		logoHeight = HEADER_LOGO_HEIGHT,
		handleClick,
		enableAuth = false,
		enableShopify = false,
    enableNotifications = false,
		showIcons = true,
	} = props

	return (
		<Hidden smDown>
			<Box sx={sx.sideNav}>
        <Stack 
          sx={{ 
            ...sx.desktopSideNav, 
            ...(enableNotifications && sx.desktopSideNavNotifications),
            ...(editing && sx.desktopSideNavEditor),
            ...(editing && enableNotifications && sx.desktopSideNavEditorNotifications)
          }} 
          direction="column" spacing={2}>
          <Stack sx={sx.desktopSideMenuItems} direction="column" spacing={2}>
            <Box sx={sx.centerMenu}>
              <Logo
                src={logo}
                width={logoWidth}
                height={logoHeight}
              />
            </Box>
            {menuItems?.map((menuItem, index) => (
              <Button
                sx={sx.menuButton}
                key={index}
                onClick={() => handleClick(menuItem.path)}
                startIcon={showIcons && <Icon size={24} name={menuItem.icon} />}
              >
                {menuItem.label}
              </Button>
            ))}
            {enableShopify && (
              <>
                <SearchButton showLabel showIcon={showIcons} editing={editing} />
                <CartButton showLabel showIcon={showIcons} editing={editing} />
              </>
            )}
          </Stack>          
          {(enableAuth || enableShopify) && (
            <Box sx={ sx.divider }>
              { enableShopify && (
                <ShopifyAuth 
                  showLabel 
                  editing={editing} 
                />              
              )}
              { enableAuth && (
                <AuthButton
                  showLabel
                  showIcon={showIcons}
                  editing={editing}
                  myAccountUrl={`${clientUrl}/my-account`}
                />
              )}
            </Box>
          )}
        </Stack>
			</Box>
		</Hidden>
	)
}

const MobileNav = (props: DesktopNavProps) => {

  const { setMenuOpen } = useContext(AppContext)

	const {
		editing,
		logo,
		logoWidth = 120,
		logoHeight = 50,
		enableShopify = false,
    enableNotifications = false,
	} = props

	return (
		<Hidden smUp>
			<AppBar 
        sx={{ 
          ...sx.appBar,
          ...(enableNotifications && sx.appBarNotifications)
        }} 
        position={'absolute'} 
        elevation={0}
      >
				<Toolbar sx={ sx.toolbar }>
					<Box sx={sx.desktopTopNav}>
						<Box sx={sx.leftMenu}>
							<IconButton onClick={() => (!editing ? setMenuOpen(true) : null)}>
								<Icon name="Menu" size={24} />
							</IconButton>
						</Box>
						<Box sx={sx.centerMenu}>
							<Logo
								src={logo}
								width={logoWidth}
								height={logoHeight - 20}
							/>
						</Box>
						<Box sx={sx.rightMenu}>
							{enableShopify && (
								<>
									<SearchButton editing={editing} />
									<CartButton editing={editing} />
								</>
							)}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Hidden>
	)
}

type MobileDrawerProps = {
	editing?: boolean
	menuItems?: MenuItem[]
	handleClick: (path: string) => void	
	showIcons?: boolean
	enableAuth?: boolean
  enableShopify?: boolean
}

const MobileDrawer = (props: MobileDrawerProps) => {

  const { clientUrl, menuOpen, setMenuOpen  } = useContext(AppContext)

	const {
		editing,		
		menuItems,
		handleClick,
		enableAuth,
    enableShopify,
		showIcons,
	} = props

	const handleMenuClick = (path: string) => {
		if (!editing) {
			setMenuOpen(false)
			handleClick(path)
		}
	}

	return (
		<Drawer
			open={menuOpen}
			handleClose={() => setMenuOpen(false)}
			anchor="left"
			styles={sx.drawer}
		>
      <Box sx={ sx.mobileMenu }>
        <Stack spacing={1} direction="column" sx={sx.mobileMenuItems}>
          {menuItems?.map((menuItem, index) => (
            <Button
              sx={sx.menuButton}
              key={index}
              onClick={() => handleMenuClick(menuItem.path)}
              startIcon={showIcons && <Icon size={24} name={menuItem.icon} />}
            >
              {menuItem.label}
            </Button>
          ))}
          {enableShopify && (
            <>
              <SearchButton showLabel showIcon={showIcons} editing={editing} />
              <CartButton showLabel showIcon={showIcons} editing={editing} />
            </>
          )}
        </Stack>
        {(enableAuth || enableShopify) && (
          <Box sx={ sx.divider }>
            { enableShopify && (
              <ShopifyAuth 
                showLabel 
                editing={editing} 
              />              
            )}
            { enableAuth && (
              <AuthButton
                showLabel
                showIcon={showIcons}
                editing={editing}
                myAccountUrl={`${clientUrl}/my-account`}
              />
            )}
          </Box>
        )}
      </Box>
		</Drawer>
	)
}

type HeaderProps = {
	editing?: boolean
	position?: 'fixed' | 'relative' | 'absolute'
	topNav?: boolean
	mode?: 'accent' | 'light' | 'dark'
	showIcons?: boolean
	logo?: string
	enableAuth?: boolean
	enableShopify?: boolean
  enableNotifications?: boolean
	bgcolor?: string
	menuItems?: MenuItem[] 
	handleClick: (path: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { logo } = useContext(AppContext)
	const {
		topNav = false,
		editing = false,
		menuItems,
		handleClick,
		enableAuth = false,
		enableShopify = false,
    enableNotifications = false,
		showIcons,
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
          menuItems={menuItems}
          handleClick={handleClick}
          showIcons={showIcons}
        />
      ) : (
        <DesktopSideNav
          editing={editing}
          logo={logo}
          enableAuth={enableAuth}
          enableShopify={enableShopify}
          enableNotifications={enableNotifications}
          menuItems={menuItems}
          handleClick={handleClick}
          showIcons={showIcons}
        />
      )}
      <MobileNav
        editing={editing}
        logo={logo}          
        enableShopify={enableShopify}
        enableNotifications={enableNotifications}
        menuItems={menuItems}
        handleClick={handleClick}
        showIcons={showIcons}        
      />
      <MobileDrawer
        editing={editing}
        enableAuth={enableAuth}
        enableShopify={enableShopify}
        menuItems={menuItems}
        handleClick={handleClick}
        showIcons={showIcons}
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
  appBar: {
    position: 'absolute',
		zIndex: theme => theme.zIndex.appBar,      
		bgcolor: 'background.default',
	},
  appBarNotifications: {
    position: 'absolute',
    top: 40,
  },
  toolbar: {},
  notifications: {
    top: '50px'
  },
	sideNav: {  
    height: '100%',      
		width: {
			sm: '280px',
			xs: '100%',
		},
		minWidth: {
			sm: '280px',
			xs: '100%',
		},
		position: 'relative',
		borderRight: '1px solid',
		borderColor: 'divider',    
	},
	drawer: {
		bgcolor: 'background.default',
	},
	desktopTopNav: {    
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
	},
  desktopSideNav: {
    justifyContent: 'space-between',
    width: '280px',
    p: 2,		
    height: '100%',
  },
  desktopSideNavNotifications: {
    height: 'calc(100% - 40px)',
  },
  desktopSideNavEditor: {
    height: 'calc(100% - 140px)',
  },
  desktopSideNavEditorNotifications: {
    height: 'calc(100% - 180px)',
  },
	desktopSideMenuItems: {		
    height: '100%',
	},
	leftMenu: {
		width: '200px',
    height: '60px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	centerMenu: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',    
    height: '60px',
	},
	rightMenu: {
		width: '200px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
    height: '60px',
	},
	menuButton: {
		justifyContent: 'flex-start',
		bgcolor: 'background.default',
		color: 'text.primary',
	},
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    minHeight: 'calc(100vh - 70px)',
    width: {
			xs: '100%',
			sm: '320px',
		},
  },
	mobileMenuItems: {		
    width: '100%'
	},
  divider: {
    width: "100%",
    borderTop: '1px solid',
    borderColor: 'divider',
    pt: 1.5
  }
}
