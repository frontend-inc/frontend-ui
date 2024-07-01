import React, { useEffect, useState, useContext } from 'react'
import { AutocompleteInput } from '../../../../components'
import { Image, Placeholder } from '../../../../components'
import { SyntheticEventType } from '../../../../types'
import { useProducts } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { Box, Collapse, Stack, Typography } from '@mui/material'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
}

const ShopifyProductInput: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_handle',
		handleChange,
	} = props

	const { domain, storefrontAccessToken } = useContext(ShopifyContext) as any

	const { loading, product, products, findProduct, findProducts } =
		useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (newValue) => {
		findProducts(newValue)
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
		if (value) {
			findProduct(value)
		}
	}, [value])

	const handleAutocompleteChange = (e) => {
		const { value } = e.target
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	useEffect(() => {
		findProducts({
			first: 10,
		})
	}, [])

	if (!domain || !storefrontAccessToken)
		return (
			<Placeholder
				title="Shopify setup required"
				description="Shopify provider is not setup"
			/>
		)
	return (
		<Stack direction="column" spacing={1} sx={sx.root}>
			<Collapse in={product?.id || loading}>
				<Box sx={sx.productCard}>
					<Image
						disableBorder
						disableBorderRadius
						src={product?.images?.edges?.[0]?.node?.url}
						alt={product?.title}
						height={120}
						width={160}
					/>
					<Stack direction="column" spacing={1} sx={sx.productContent}>
						<Typography variant="body2" color="text.primary">
							{product?.title}
						</Typography>
					</Stack>
				</Box>
			</Collapse>
			<AutocompleteInput
				name={name}
				label={label}
				value={value}
				options={options}
				handleChange={handleAutocompleteChange}
				handleInputChange={handleInputChange}
				direction={direction}
				placeholder={placeholder}
			/>
		</Stack>
	)
}

export default ShopifyProductInput

const sx = {
	root: {
		width: '100%',
	},
	productCard: {
		width: 162,
		minHeight: 182,
		borderRadius: 1,
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',		
		p: 0,
    boxShadow: 1
	},
	productContent: {
		p: 1,    
	},
}
