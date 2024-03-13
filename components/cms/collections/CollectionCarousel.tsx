import React, { useContext, useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Stack } from '@mui/material'
import {
	Carousel,
} from '../..'
import { Typography } from '@mui/material'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import CollectionCard from './CollectionCard'

type CollectionCarouselProps = {
	title?: string
	url: string
	style: 'card' | 'avatar' | 'cover'
	fields?: any
	editing?: boolean
	navigateUrl: any
	perPage?: number
	query?: any
	buttonText?: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
  enableBorder?: boolean
	enableShowDots?: boolean
	enableGradient?: boolean
}

const CollectionCarousel: React.FC<CollectionCarouselProps> = (props) => {
	
  const router = useRouter()
  const { clientUrl } = useContext(AppContext)

	const {
		title,
		url,
    style='card',
		query: defaultQuery = {},
		perPage = 20,
		navigateUrl,
		buttonText,
		enableAutoPlay = false,
		enableArrows = false,
		enableShowDots = true,
		enableBorder = false,
		enableGradient = false,
	} = props

	const { findMany, resources } = useResource({
			url,
		})

  const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	useEffect(() => {
		if (url && defaultQuery && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, defaultQuery, perPage])

	return (
		<Stack spacing={1} sx={sx.root}>
      <Typography variant="h5" color="textPrimary">
        {title}
      </Typography>				    
      <Carousel 
        showDots={enableShowDots}
        autoPlay={enableAutoPlay}
        arrows={enableArrows}
      >
        { resources?.map((resource, index) => (
          <CollectionCard 
            key={index}
            layout={'grid'}
            style={style}
            title={resource?.title}
            image={resource?.image?.url}
            video={resource?.video?.url}
            description={resource?.description}
            buttonText={buttonText}
            handleClick={() => handleClick(resource) }
            enableBorder={enableBorder}
            enableGradient={enableGradient}
          />
        ))}
      </Carousel>      
		</Stack>
	)
}

export default CollectionCarousel

const sx = {
	root: {
		width: '100%',
	},
  grid: {
    display: 'grid',
    gridTemplateColumns: {
      md: '1fr 1fr 1fr',
      xs: '1fr',
    },
    gap: '16px'
  },
  item: {
    p: 2
  }
}
