import React from 'react'
import { Stack } from '@mui/material'
import { Icon, Placeholder } from '../..'
import Logo from './Logo'
import { Typography } from '@mui/material'

type LogosProps = {
	title?: string
	images?: Record<string, any>[]
	editing?: boolean
	buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableGradient?: boolean
}

const Logos: React.FC<LogosProps> = (props) => {
	const { title, images = [], editing, ...rest } = props

	return (
		<Stack spacing={1} sx={sx.root}>
			<Typography variant="caption" sx={sx.caption}>
				{title}
			</Typography>
			<Stack sx={sx.logos} direction="row" spacing={1}>
				{images?.map((image, index) => (
					<Logo
						key={index}
						title="Logo"
						image={image?.src}
						height={50}
						width={120}
					/>
				))}
			</Stack>
			{images?.length === 0 && (
				<Placeholder
					icon={<Icon name="Camera" />}
					title="No images found"
					description="Images will appear here"
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
