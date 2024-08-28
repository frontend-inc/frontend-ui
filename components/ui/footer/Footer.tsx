import React from 'react'
import { Link, Divider, Stack } from '@mui/material'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'

type FooterProps = {
	menuLinks: MenuLinkType[]
	socialLinks: {
		label: string
    provider: string
		url: string
    position: number
	}[]
	handleClick: (MenuItem: MenuLinkType) => void
}

const Footer: React.FC<FooterProps> = (props) => {
	const { handleClick, menuLinks, socialLinks } = props

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
			<Stack direction="row" divider={<Divider sx={ sx.divider } />} spacing={1}>
				{menuLinks?.map((menuLink, i) => (
					//@ts-ignore
					<Link variant='overline' sx={sx.link} key={i} onClick={() => handleClick(menuLink?.path)}>
						{menuLink?.name}
					</Link>
				))}
			</Stack>
			<Stack direction="row" spacing={0}>
				{socialLinks
          ?.sort((a, b) => a?.position - b?.position)
          ?.map((link, i) => (
					<SocialLink
						key={i}
						provider={link?.provider}
						url={link?.url}
					/>
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
	link: {
		color: 'text.secondary',
		cursor: 'pointer',
		textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
	},
  divider: {
    borderRight: '1px solid',
    borderColor: 'divider',    
  }
}
