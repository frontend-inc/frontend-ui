import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Placeholder } from '../..'
import Logo from './Logo'

export type LogosProps = {
	title?: string
	items?: {
		image: string
		title?: string
	}[]
}

const Logos: React.FC<LogosProps> = (props) => {
	const { title, items = [] } = props

	return (
		<Stack spacing={0} sx={sx.root}>
			{title && (
				<Typography variant="body1" color="text.secondary" sx={sx.title}>
					{title}
				</Typography>
			)}
			<Stack sx={sx.logos} direction="row" spacing={1}>
				{items?.map((item, index) => (
					<Logo
						key={index}
						title="Logo"
						image={item?.image}
						height={60}
						width={120}
					/>
				))}
			</Stack>
			{items?.length === 0 && (
				<Placeholder
					icon="Image"
					title="No logos"
					description="Logos will appear here"
				/>
			)}
		</Stack>
	)
}

export default Logos

const sx = {
	root: {
		width: '100%',
		p: 2,
		bgcolor: 'background.main',
	},
	title: {
		width: '100%',
		textAlign: 'center',
	},
	logos: {
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		justifyContent: {
			sm: 'center',
			xs: 'flex-start',
		},
	},
}
