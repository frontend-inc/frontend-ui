import React from 'react'
import { Box, Stack } from '@mui/material'
import { Carousel } from '../..'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/router'
import CollectionListItem from './CollectionListItem'
import { useForms } from '../../../hooks'
import { CollectionListItemsProps } from '../collections/CollectionListItems'
import { useResourceContext } from 'frontend-js'

export type CarouselListItemsProps = CollectionListItemsProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const CarouselListItems: React.FC<CarouselListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		buttons,
		href,
		displayFields,
		enableAutoPlay = true,
		enableArrows = false,
		enableDots = false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
	} = props

	const { setOpenShow, loading, resources, setResource } = useResourceContext()

	const handleClick = (resource) => {
		if (href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	return (
		<Stack
			spacing={1}
			sx={{
				...sx.root,
				...(loading && sx.loading),
			}}
		>
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
							pb: enableDots ? 4 : 1,
						}}
					>
						<CollectionListItem
							buttons={buttons}
							style="card"
							resource={resource}
							displayFields={displayFields}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableFavorites={enableFavorites}
							enableLikes={enableLikes}
						/>
					</Box>
				))}
			</Carousel>
		</Stack>
	)
}

export default CarouselListItems

const sx = {
	root: {
		width: '100%',
	},
	loading: {
		opacity: 0.5,
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
		p: 1,
	},
}
