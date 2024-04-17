import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Placeholder } from '../..'
import { Image } from '../../../components'

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
			<Stack sx={sx.logos} direction="row" spacing={4}>
				{items?.map((item, index) => (
          <Box width={120} key={index}>
            <Image
              key={index}
              alt="Logo"
              image={item?.image}
              height={60}
              width={120}
              disableBorderRadius
              enableBorder={false}
            />
          </Box>
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
		py: 1,
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
