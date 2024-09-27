import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { Placeholder, BrandLogos } from '../..'

export type LogosProps = {
	title?: string
	logos: {
		image: string
		title: string
	}[]
}

const Logos: React.FC<LogosProps> = (props) => {
	const { title, logos = [] } = props

	return (
		<Stack spacing={0} sx={sx.root}>
			{title && (
				<Typography variant="caption" color="text.secondary" sx={sx.title}>
					{title}
				</Typography>
			)}
        <BrandLogos 
          logos={ logos } 
          width={128}
          height={48}
        />
        {logos?.length === 0 && (
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
		mb: 4,
	},	
}
