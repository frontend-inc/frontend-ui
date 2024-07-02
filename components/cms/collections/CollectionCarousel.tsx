import React, { useContext, useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import { Carousel } from '../..'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import CollectionCard from './CollectionCard'
import { ActionType } from '../../../types'

export type CollectionCarouselProps = {
	actions: ActionType[]
	url: string
	style: 'card' | 'avatar' | 'cover' | 'chip' | 'text' | 'image'
	fields?: any
	editing?: boolean
	href: any
	perPage?: number
	query?: any
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableBorder?: boolean
	enableDots?: boolean
	enableGradient?: boolean
	enableFavorites?: boolean
}

const CollectionCarousel: React.FC<CollectionCarouselProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		actions,
		url,
		query: defaultQuery = {},
		perPage = 20,
		href,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
		enableBorder = false,
		enableGradient = false,
		enableFavorites = false,
	} = props

	const { findMany, resources } = useResource({
		url,
	})

	const handleClick = (item) => {
		if (clientUrl && href && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

	useEffect(() => {
		if (url && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, perPage])

	return (
		<Stack spacing={1} sx={sx.root}>
			<Carousel
				enableDots={enableDots}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
			>
				{resources?.map((resource, index) => (
					<Box 
            key={index} 
            sx={{
              ...sx.item,
              pt: enableArrows ? 5 : 1,
              pb: enableDots ? 4 : 1
            }}
          >
						<CollectionCard
							actions={actions}
							style='card'
							resource={resource}
              displayFields={[]}
							handleClick={() => handleClick(resource)}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableFavorites={enableFavorites}
						/>
					</Box>
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
		gap: '16px',
	},
	item: {
    p: 2,
	}
}
