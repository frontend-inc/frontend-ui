import React from 'react'
import { Link, Divider, Stack } from '@mui/material'

type LayoutFooterProps = {
	name?: string
	privacyUrl?: string
	termsUrl?: string
}

const LayoutFooter: React.FC<LayoutFooterProps> = (props) => {
	const { name, privacyUrl, termsUrl } = props

	return (
		<Stack sx={sx.root} spacing={1} direction="column">
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={1}
			>
				<Link
					sx={sx.link}
					href={termsUrl}
					variant={'body2'}
					color="text.secondary"
				>
					About {name}
				</Link>
				<Link
					sx={sx.link}
					href={termsUrl}
					variant={'body2'}
					color="text.secondary"
				>
					Terms of service
				</Link>
				<Link
					sx={sx.link}
					href={privacyUrl}
					variant={'body2'}
					color="text.secondary"
				>
					Privacy policy
				</Link>
			</Stack>
		</Stack>
	)
}

export default LayoutFooter

const sx = {
	root: {
		height: '90px',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'background.default',
	},
	link: {
		cursor: 'pointer',
	},
}
