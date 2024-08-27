import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material'
import { Icon, Label } from '../../../components'

export type Breadcrumb = {
	label: string
	path: string
}

export type BreadcrumbsProps = {
	links: Breadcrumb[]
	maxLinks?: number
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
	const { links = [], maxLinks = 2 } = props

	const { clientUrl } = useContext(AppContext)

	if (links.length === 0) return null
	return (
		<Box sx={sx.root}>
			<MuiBreadcrumbs
				maxItems={maxLinks}
				aria-label="breadcrumb"
				separator={
					<Icon color="text.secondary" name="ChevronRight"  />
				}
			>
				{links.map((link, index) => (
					<Link
						variant="caption"
						sx={sx.link}
						key={index}
						href={`${clientUrl}${link?.path}`}
					>
						{link?.label}
					</Link>
				))}
			</MuiBreadcrumbs>
		</Box>
	)
}

export default Breadcrumbs

const sx = {
	root: {
		py: 0,
	},
	link: {
		color: 'text.secondary',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}
