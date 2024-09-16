import React, { useState } from 'react'
import { Icon, Image, ProductAutosuggest } from '../../../components'
import { SyntheticEventType, ProductType } from '../../../types'
import { IconButton, Box, Fade, Collapse, Stack } from '@mui/material'

type ProductImageProps = {
	product: ProductType
	handleDelete: () => void
	height?: number
	width?: number
}

const ProductImage: React.FC<ProductImageProps> = (props) => {
	const { product, handleDelete, height = 160, width = 160 } = props

	if (!product) return null
	return (
		<Fade in timeout={350}>
			<Box sx={sx.productCard}>
				<Image
					enableGradient
					disableBorder
					src={product?.image?.url}
					alt={product?.title}
					height={height}
					width={width}
				/>
				<IconButton size="small" onClick={handleDelete} sx={sx.deleteButton}>
					<Icon name="X" />
				</IconButton>
			</Box>
		</Fade>
	)
}

type AutosuggestProps = {
	value?: ProductType[]
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void		
  handleAddProducts?: (productIds: string[] | number[]) => void
  handleRemoveProducts?: (productIds: string[] | number[]) => void
}

const ProductsInput: React.FC<AutosuggestProps> = (props) => {

  const [productId, setProductId] = useState<number>()

	const {
		value: products = [],
		label,
		placeholder,
		name = 'product_id',    
    handleAddProducts,
    handleRemoveProducts,
	} = props

  const handleInputChange = async (ev) => {
    const id = ev?.target?.value
    setProductId(id)
    console.log('productId', id)
    //await handleAddProducts([id: productId])
  }

  const handleDelete = async (productId) => {
    console.log('productId', productId)
    //await handleRemoveProducts([id: productId])
  }
	
	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			<Collapse in={products?.length > 0}>
				<Box sx={sx.carouselContainer}>
					<Box sx={sx.carousel}>
						{products?.map((product) => (
							<ProductImage
								key={product?.id}
								product={product}								
								handleDelete={() => handleDelete(product?.id)}
							/>
						))}
					</Box>
				</Box>
			</Collapse>
			<ProductAutosuggest
				name={name}
				label={label}     
        value={productId}   
        valueParam='id'
				handleChange={handleInputChange}        
				placeholder={placeholder}
			/>
		</Stack>
	)
}

export default ProductsInput

const sx = {
	root: {
		width: '100%',
	},
	productCard: {
		position: 'relative',
		width: 160,
		minWidth: 160,
		minHeight: 160,
		borderRadius: 1,
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		p: 0,
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: 2,
		},
	},
	productContent: {
		p: 1,
	},
	carouselContainer: {},
	carousel: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: '10px',
	},
	deleteButton: {
		position: 'absolute',
		top: 2,
		right: 2,
		bgcolor: 'background.default',
		opacity: 0.5,
		'&:hover': {
			bgcolor: 'background.default',
			opacity: 1,
		},
	},
}
