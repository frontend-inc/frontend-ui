import React from 'react'
import { Box, Link, Divider, Stack } from '@mui/material'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'
import Logo from '../header/Logo'
import { useApp } from '../../../hooks'

export type FooterProps = {
  logo?: string
  links: MenuLinkType[]  
	legalLinks: MenuLinkType[]
	socialLinks: {
		label: string
		provider: string
		url: string
		position: number
	}[]
	handleClick: (path: string) => void
}

const Footer: React.FC<FooterProps> = (props) => {
	const { logo, handleClick, links, socialLinks, legalLinks } = props  
  const { logo: appLogo } = useApp()  

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
      <Stack sx={ sx.headerLinks } direction={{ sm: 'row', xs: 'column'}}>
        <Box sx={ sx.logo }>
          <Logo 
            src={logo || appLogo} 
            alt="logo" 
            width={100} 
            height={50}
          />
        </Box>
        <Stack sx={ sx.footerMenu } direction="row" spacing={3}>
          {links?.map((menuLink, i) => (
            <Link
              variant="subtitle2"
              sx={sx.link}
              key={i}
              onClick={() => handleClick(menuLink?.path)}
            >
              {menuLink?.label}
            </Link>
          ))}
        </Stack>
        <Box sx={ sx.spacer } />
      </Stack>
      <Stack direction={{ sm: 'row', xs: 'column'}} sx={ sx.footerLinks } spacing={2}>
        <Stack direction="row" spacing={1}>
          {socialLinks
            ?.sort((a, b) => a?.position - b?.position)
            ?.map((link, i) => (
              <SocialLink 
                key={i} 
                provider={link?.provider} 
                url={link?.url} 
                color='common.black'
              />
            ))}
        </Stack>
        <Stack direction="row" divider={<Divider sx={sx.divider} />} spacing={1}>
          {legalLinks?.map((menuLink, i) => (
            //@ts-ignore
            <Link
              variant="overline"
              sx={sx.link}
              key={i}
              onClick={() => handleClick(menuLink?.path)}
            >
              {menuLink?.label}
            </Link>
          ))}
        </Stack>
        <Box sx={ sx.spacer } />
      </Stack>
		</Stack>
	)
}

export default Footer

const sx = {
	root: {
		py: 2,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'background.default',
		minHeight: '80px',
	},
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
  footerMenu: {
    py: 3,
  },
  logo: {
    width: '100px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
	link: {
		color: 'text.secondary',
		cursor: 'pointer',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	divider: {
		borderRight: '1px solid',
		borderColor: 'divider',
	},
  headerLinks: {    
    width: '100%',    
    px: 3,    
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    borderColor: 'divider',
  },
  footerLinks: {    
    width: '100%',
    py: 1,
    px: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spacer: {
    width: '100px',
  }
}
