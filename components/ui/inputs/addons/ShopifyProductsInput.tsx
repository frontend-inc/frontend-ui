import React, { useEffect, useState, useContext } from 'react'
import { AutocompleteInput } from '../../..'
import { Image, Placeholder } from '../../..'
import { SyntheticEventType } from '../../../../types'
import { useProducts } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { IconButton, Box, Fade, Collapse, Stack } from '@mui/material'
import { uniq } from 'lodash'
import { Icon } from '../../../../components'

type ShopifyProductImageProps = {
	handle: string
	handleDelete: () => void
	height?: number
	width?: number
}

const ShopifyProductImage: React.FC<ShopifyProductImageProps> = (props) => {
	const { handle, handleDelete, height = 160, width = 160 } = props

	const { product, findProduct } = useProducts()

	useEffect(() => {
		if (handle) {
			findProduct(handle)
		}
	}, [handle])

	if (!product) return null
	return (
		<Fade in timeout={350}>
			<Box sx={sx.productCard}>
				<Image
					enableGradient
					disableBorder
					src={product?.images?.edges?.[0]?.node?.url}
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
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
	height?: number
	width?: number
}

const ShopifyProductsInput: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_handle',
		handleChange,
		height,
		width,
	} = props

	const [currentValue, setCurrentValue] = useState('')
	const [shopifyProducts, setShopifyProducts] = useState([])
	const { domain, storefrontAccessToken } = useContext(ShopifyContext) as any

	const { products, setProduct, findProducts } = useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (newValue) => {
		findProducts(newValue)
		if (newValue == '') {
			setProduct(null)
		}
	}

	useEffect(() => {
		if (products) {
			setOptions(
				products?.map((product) => ({
					label: product.title,
					value: product.handle,
					image: product.images?.edges?.[0]?.node?.url,
				}))
			)
		}
	}, [products])

	useEffect(() => {
		if (value && Array.isArray(value)) {
			setShopifyProducts(value)
		}
	}, [value])

	const handleAutocompleteChange = (e) => {
		const { value } = e.target
		setCurrentValue(value)
		let uniqProducts = uniq([...shopifyProducts, value])
		setShopifyProducts(uniqProducts)
		handleChange({
			target: {
				name,
				value: uniqProducts,
			},
		})
	}

	useEffect(() => {
		findProducts({
			first: 10,
		})
	}, [])

	const handleDelete = (handle: string) => {
		let newProducts = shopifyProducts.filter((product) => product !== handle)
		setShopifyProducts(newProducts)
		handleChange({
			target: {
				name,
				value: newProducts || [],
			},
		})
	}

	if (!domain || !storefrontAccessToken) {
		return (
			<Placeholder
				title="Shopify setup required"
				description="Shopify provider is not setup"
			/>
		)
	}
	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			<Collapse in={shopifyProducts?.length > 0}>
				<Box sx={sx.carouselContainer}>
					<Box sx={sx.carousel}>
						{shopifyProducts?.map((handle) => (
							<ShopifyProductImage
								key={handle}
								handle={handle}
								height={height}
								width={width}
								handleDelete={() => handleDelete(handle)}
							/>
						))}
					</Box>
				</Box>
			</Collapse>
			<AutocompleteInput
				name={name}
				label={label}
				value={currentValue}
				options={options}
				handleChange={handleAutocompleteChange}
				handleInputChange={handleInputChange}
				direction={direction}
				placeholder={placeholder}
			/>
		</Stack>
	)
}

export default ShopifyProductsInput

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
