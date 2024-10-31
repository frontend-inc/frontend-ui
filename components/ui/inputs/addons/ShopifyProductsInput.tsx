'use client'

import React, { useEffect, useState, useContext } from 'react'
import { useAdminProducts } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { uniq } from 'lodash'
import { X } from 'lucide-react'

type ShopifyProductImageProps = {
	handle: string
	handleDelete: () => void
	height?: number
	width?: number
}

const ShopifyProductImage: React.FC<ShopifyProductImageProps> = ({
	handle,
	handleDelete,
	height = 160,
	width = 160,
}) => {
	const { product, findProduct } = useAdminProducts()

	useEffect(() => {
		if (handle) {
			findProduct(handle)
		}
	}, [handle, findProduct])

	if (!product) return null

	return (
		<div className="relative group animate-fade-in">
			<img
				src={product.images?.edges?.[0]?.node?.url}
				alt={product.title}
				className="rounded-md transition-shadow duration-300 group-hover:shadow-lg"
				style={{ height, width }}
			/>
			<button
				onClick={handleDelete}
				className="absolute top-2 right-2 p-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				aria-label="Delete product"
			>
				<X className="w-4 h-4 text-gray-600" />
			</button>
		</div>
	)
}

type AutosuggestProps = {
	value?: string[]
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: { target: { name: string; value: string[] } }) => void
	direction?: 'row' | 'column'
	height?: number
	width?: number
}

const ShopifyProductsInput: React.FC<AutosuggestProps> = ({
	value = [],
	label,
	direction = 'column',
	placeholder,
	name = 'shopify_handle',
	handleChange,
	height,
	width,
}) => {
	const [currentValue, setCurrentValue] = useState('')
	const [shopifyProducts, setShopifyProducts] = useState<string[]>(value)
	const { domain, storefrontAccessToken } = useContext(ShopifyContext) as any

	const { products, setProduct, findProducts } = useAdminProducts()

	const [options, setOptions] = useState<
		{ label: string; value: string; image: string }[]
	>([])
	const [isLoading, setIsLoading] = useState(false)

	const handleInputChange = async (newValue: string) => {
		setIsLoading(true)
		try {
			await findProducts(newValue)
			if (newValue === '') {
				setProduct(null)
			}
		} catch (error) {
			console.error('Error fetching products:', error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (products) {
			setOptions(
				products.map((product) => ({
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

	const handleAutocompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setCurrentValue(value)
		const uniqProducts = uniq([...shopifyProducts, value])
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
	}, [findProducts])

	const handleDelete = (handle: string) => {
		const newProducts = shopifyProducts.filter((product) => product !== handle)
		setShopifyProducts(newProducts)
		handleChange({
			target: {
				name,
				value: newProducts,
			},
		})
	}

	if (!domain || !storefrontAccessToken) {
		return (
			<div
				className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
				role="alert"
			>
				<p className="font-bold">Shopify setup required</p>
				<p>Shopify provider is not setup</p>
			</div>
		)
	}

	return (
		<div className="w-full space-y-4">
			{shopifyProducts.length > 0 && (
				<div className="overflow-x-auto">
					<div className="flex flex-wrap gap-4">
						{shopifyProducts.map((handle) => (
							<ShopifyProductImage
								key={handle}
								handle={handle}
								height={height}
								width={width}
								handleDelete={() => handleDelete(handle)}
							/>
						))}
					</div>
				</div>
			)}
			<div
				className={`flex ${
					direction === 'column' ? 'flex-col' : 'flex-row'
				} gap-2`}
			>
				{label && (
					<label
						htmlFor={name}
						className="block text-sm font-medium text-gray-700"
					>
						{label}
					</label>
				)}
				<div className="relative">
					<input
						type="text"
						id={name}
						name={name}
						className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
						placeholder={placeholder}
						value={currentValue}
						onChange={handleAutocompleteChange}
						onInput={(e) =>
							handleInputChange((e.target as HTMLInputElement).value)
						}
						list="product-options"
						aria-autocomplete="list"
						aria-expanded={options.length > 0}
					/>
					{isLoading && (
						<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
							<div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
						</div>
					)}
					<datalist id="product-options">
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</datalist>
				</div>
			</div>
		</div>
	)
}

export default ShopifyProductsInput
