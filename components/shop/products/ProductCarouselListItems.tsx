import React from 'react'
import { Box, Stack } from '@mui/material'
import { Carousel } from '../..'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/router'
import ProductListItem from './ProductListItem'
import { useForms } from '../../../hooks'
import { ProductListItemsProps } from '../products/ProductListItems'
import { useResourceContext } from 'frontend-js'

export type ProductCarouselListItemsProps = ProductListItemsProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const ProductCarouselListItems: React.FC<ProductCarouselListItemsProps> = (props) => {
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
		enableEdit = false,
		enableDelete = false,
		enableRatings = false,
		enableUsers = false,
		enableFavorites = false,
		enableLikes = false,
	} = props

	const { handleEdit, handleDeleteClick } = useForms()

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
						<ProductListItem
							buttons={buttons}
							style="card"
							resource={resource}
							displayFields={displayFields}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							handleEdit={() => handleEdit(resource)}
							handleDelete={() => handleDeleteClick(resource)}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableFavorites={enableFavorites}
							enableRatings={enableRatings}
							enableUsers={enableUsers}
							enableLikes={enableLikes}
						/>
					</Box>
				))}
			</Carousel>
		</Stack>
	)
}

export default ProductCarouselListItems

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
