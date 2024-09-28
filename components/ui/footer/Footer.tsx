import React from 'react'
import { Box, Link, Divider, Stack } from '@mui/material'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'
import Logo from '../header/Logo'
import { useApp } from '../../../hooks'

export type FooterProps = {
	logo?: string
	links?: MenuLinkType[]
	legalLinks?: MenuLinkType[]
	socialLinks?: {
		label: string
		provider: string
		url: string
		position: number
	}[]
	handleClick: (path: string) => void
}

const Footer: React.FC<FooterProps> = (props) => {
	const {
		logo,
		handleClick,
		links = [],
		socialLinks = [],
		legalLinks = [],
	} = props
	const { logo: appLogo } = useApp()

	const handleLogoClick = () => {
		handleClick('/')
	}

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
			<Stack
				spacing={6}
				sx={sx.headerLinks}
				direction={{ sm: 'row', xs: 'column' }}
			>
				<Stack
					sx={sx.footerMenu}
					direction={{ sm: 'row', xs: 'column' }}
					spacing={3}
				>
					<Box sx={sx.logo}>
						<Logo
							handleClick={handleLogoClick}
							src={logo || appLogo}
							width={100}
							height={50}
						/>
					</Box>
					<Box sx={sx.gridContainer}>
						<Box sx={sx.grid}>
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
						</Box>
					</Box>
					<Box sx={sx.spacer} />
				</Stack>
			</Stack>
			<Stack
				direction={{ sm: 'row', xs: 'column' }}
				sx={sx.footerLinks}
				spacing={2}
			>
				<Stack direction="row" spacing={1}>
					{socialLinks
						?.sort((a, b) => a?.position - b?.position)
						?.map((link, i) => (
							<SocialLink
								key={i}
								provider={link?.provider}
								url={link?.url}
								color="common.black"
							/>
						))}
				</Stack>
				<Stack
					direction="row"
					divider={<Divider sx={sx.divider} />}
					spacing={1}
				>
					{legalLinks?.map((menuLink, i) => (
						//@ts-ignore
						<Link
							variant="overline"
							sx={sx.footerLink}
							key={i}
							onClick={() => handleClick(menuLink?.path)}
						>
							{menuLink?.label}
						</Link>
					))}
				</Stack>
				<Box sx={sx.spacer} />
			</Stack>
		</Stack>
	)
}

export default Footer

const sx = {
	root: {
		py: 2,
		width: '100%',
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
		py: 6,
		width: '100%',
		alignItems: 'flex-start',
	},
	logo: {
		width: {
			sm: '160px',
			xs: '100%',
		},
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
		width: {
			sm: '140px',
			xs: '100%',
		},
	},
	footerLink: {
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
	},
	gridContainer: {
		pl: {
			sm: 3,
			xs: 0,
		},
		width: '100%',
		display: 'flex',
		justifyContent: {
			sm: 'center',
			xs: 'flex-start',
		},
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: {
			sm: 'row',
			xs: 'column',
		},
		gap: '16px',
		pl: {
			sm: 3,
			xs: 0,
		},
	},
}
