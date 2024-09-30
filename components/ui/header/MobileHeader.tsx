import React from 'react'
import { Stack, Box, Hidden, IconButton } from '@mui/material'
import { CartButton, ButtonActions, Icon, AuthButton } from '../..'
import { ShopifyCartButton } from '../../shopify'
import { useApp } from '../../../hooks'
import { ButtonType, MenuLinkType } from '../../..'
import Logo from './Logo'

type MobileNavProps = {
	logo: string
	logoWidth?: number
	logoHeight?: number
	links: MenuLinkType[]
  buttons: ButtonType[]
  enableAuth?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
	enableNotifications?: boolean
	handleClick: (path: string) => void
}

const MobileNav = (props: MobileNavProps) => {
	const { setMenuOpen } = useApp()

	const {
		logo,
		logoWidth = 120,
		logoHeight = 50,
		handleClick,
    buttons,
    enableAuth = false,
		enableStripe = false,
		enableShopify = false,
	} = props

	return (
		<Hidden mdUp>
			<Box sx={sx.appBar}>
				<Stack direction="row" spacing={0} sx={sx.header}>
          <Stack direction="row" justifyContent="flex-start" sx={ sx.leftMenu}>
            <IconButton onClick={() => setMenuOpen(true)}>
              <Icon name="Menu" size={24} />
            </IconButton>
            <Logo
              handleClick={() => handleClick('/')}
              src={logo}
              width={logoWidth}
              height={logoHeight - 20}
            />
          </Stack>
					<Box sx={sx.rightMenu}>
            { buttons?.length > 0 && (
              <Box sx={{ mr: 1 }}>
                <ButtonActions size="small" buttons={buttons} />
              </Box>
            )}
            {enableAuth && <AuthButton />}
						{enableStripe && <CartButton />}
						{enableShopify && <ShopifyCartButton />}            
					</Box>
				</Stack>
			</Box>
		</Hidden>
	)
}

export default MobileNav

const sx = {
	appBar: {
		width: '100%',
		height: 64,
		bgcolor: 'background.default',
	},
	drawer: {
		bgcolor: 'background.default',
	},
	header: {
		width: '100%',
    alignItems: 'space-between',
	},
	rightMenu: {
    pr: 1,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
  leftMenu: {
    height: 60,
    alignItems: 'center'
	},
}
