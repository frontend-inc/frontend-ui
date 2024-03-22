import React from 'react'
import { Stack } from '@mui/material'
import { Placeholder } from '../..'
import Logo from './Logo'
import { Typography } from '@mui/material'

type LogosProps = {
	title?: string
	items?: {
    src: string 
    alt?: string
  }[]
	editing?: boolean
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Logos: React.FC<LogosProps> = (props) => {
	const { title, items = [], editing, ...rest } = props

	return (
		<Stack spacing={1} sx={sx.root}>
			<Typography variant="caption" sx={sx.caption}>
				{title}
			</Typography>
			<Stack sx={sx.logos} direction="row" spacing={1}>
				{items?.map((item, index) => (
					<Logo
						key={index}
						title="Logo"
						image={item?.src}
						height={50}
						width={120}
					/>
				))}
			</Stack>
			{items?.length === 0 && (
				<Placeholder
					icon='Search'
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
	caption: {
		color: 'text.primary',
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
