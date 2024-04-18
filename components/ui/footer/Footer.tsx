import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Link, Button, Divider, Stack, Typography, colors } from '@mui/material'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'

type FooterProps = {
	menuLinks?: MenuLinkType[]
  socialLinks: {
    name?: string
    url?: string
  }[]  
  handleClick: (MenuItem: MenuLinkType) => void
}

const Footer: React.FC<FooterProps> = (props) => {
	const {
		handleClick,
		menuLinks,
		socialLinks
	} = props

  console.log("Footer", socialLinks)

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
      <Stack           
        direction="row" divider={<Divider />} spacing={1}>
        {menuLinks?.map((menuLink, i) => (
          //@ts-ignore
          <Link sx={ sx.link } key={i} handleClick={() => handleClick(menuLink)}>
            {menuLink?.name}
          </Link>
        ))}
      </Stack>
      <Stack direction="row" spacing={0} sx={sx.socialUrls}>
        { socialLinks?.map((link, i) => (
          <SocialLink provider={ link?.name?.toLowerCase()} url={link?.url} key={i} />
        ))}        
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
		borderTop: '1px solid',
		borderColor: 'divider',
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
	divider: {
		borderTop: '1px solid',
		borderColor: 'divider',
		width: '96%',
	},
  link: {
    color: 'text.secondary',
    cursor: 'pointer',  
    textDecoration: 'none',
  }
}
