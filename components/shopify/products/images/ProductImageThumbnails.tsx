import React from 'react'
import { Stack, Box, CardActionArea } from '@mui/material'
//import Zoom from 'react-medium-image-zoom'
import { Image as ProductImage } from 'frontend-shopify'
import Image from 'next/image'

type ThumbnailProps = {
  image: any
  size: number
  active: boolean
  handleClick: (img: any) => void
}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  
  const { image, active, handleClick } = props
  return(    
      <Box 
        sx={{
          ...sx.thumbnail,
          ...(active && sx.activeThumbnail),            
        }}
      >
        <CardActionArea
          sx={{ 
            p: 0       
          }}
          onClick={() => handleClick(image)}
        >
        <Image
          src={image.url}
          width={96}
          height={96}
          alt={image?.altText}
          layout="respsonive"
          style={{
            objectFit: 'cover'
          }}
        />
      </CardActionArea>
    </Box>    
  )
}

type ProductImageSliderProps = {
  image: ProductImage
  images: ProductImage[]
  handleClick: (img: ProductImage) => void
	height?: number
	width?: number
	thumbnailSize?: number
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = (props) => {	
	const { 
    image, 
    images, 
    handleClick, 
    height = 520, 
    width = 520, 
    thumbnailSize = 80 
  } = props

	return (
		<Stack direction="column" spacing={0} sx={sx.root}>
			<Box
				sx={{
					...sx.image,          
					width: '100%'
				}}
			>
				{ image?.url && (
						<Image
							src={image?.url}
							alt={image?.altText}
							height={height}
							width={width}
							layout="responsive"
							style={{
								objectFit: 'contain',
							}}
						/>
				)}        
			</Box>
      <Stack direction="row" spacing={1} sx={ sx.thumbnails }>
				{images?.map((img) => (
          <Thumbnail 
            key={img?.id}
            image={img}
            active={img?.id === image?.id}
            handleClick={handleClick}
            size={thumbnailSize}
          />					
				))}
			</Stack>
		</Stack>
	)
}

export default ProductImageSlider

const sx = {
	root: {
		
	},
	image: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%',
		maxWidth: '100vw',
    height: '100%'
	},
	thumbnails: {
    mt: 1,
		width: '100%',
		height: 100,    
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		overflowY: 'scroll',
    gap: 0,
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	thumbnail: {    
    width: '100px',
    height: '100px',
		border: '2px solid transparent',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		'&:hover': {
			opacity: 0.8,
		},
    overflow: 'hidden'
	},
	activeThumbnail: {
    border: '2px solid',
		borderColor: 'primary.main',
	},
}
