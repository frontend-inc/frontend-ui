import React from 'react'
import { Box, Stack } from '@mui/material'
import { Heading } from '../../../components'
import FeaturedCard from './FeaturedCard'

type FeaturedProps = {
	title?: string
	featured: {
		icon?: any
		title?: string
		description?: string
	}[]
  enableGradient?: boolean
  enableOverlay?: boolean
  enableBorder?: boolean
}

const Featured: React.FC<FeaturedProps> = (props) => {
	const { 
    title, 
    featured,
    enableBorder,
    enableGradient,
    enableOverlay,
  } = props || {}

	return (
		<Box>
			{title && (
				<Heading title={ title } />
			)}
      <Stack spacing={4}>
        {featured?.map((item, i) => (
          <FeaturedCard
            title={item?.title}
            description={item?.description}
            image={item?.image}
            buttonText={item?.buttonText}
            href={item?.url}
            flexDirection={ i % 2 === 0 ? 'row' : 'row-reverse'}
            enableBorder={enableBorder}
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
          />
        ))}
      </Stack>
		</Box>
	)
}

export default Featured

const sx = {
	title: {
		width: '100%',
		textAlign: 'center',
	},
	item: {
		p: 2,
	},
}
