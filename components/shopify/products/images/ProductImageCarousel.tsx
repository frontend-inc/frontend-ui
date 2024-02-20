import React from 'react'
import { Box } from '@mui/material'
import { CarouselImage, TouchableOpacity } from '../../../../components'
import { useProductContext } from 'frontend-shopify'

const ProductImageCarousel: React.FC = () => {
	const { images, handleImageClick } = useProductContext()
	return (
		<CarouselImage>
			{images?.map((image) => (
				<Box sx={sx.image} key={image.id}>
					<TouchableOpacity handleClick={() => handleImageClick(image)}>
						<Box
							component="img"
							src={image?.url || image?.url}
							sx={{
								...sx.image,
								height: '512px',
							}}
							alt={image?.altText}
						/>
					</TouchableOpacity>
				</Box>
			))}
		</CarouselImage>
	)
}

export default ProductImageCarousel

const sx = {
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		pb: 1,
	},
}
