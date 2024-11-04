'use client'

import React, { useEffect, useState, useContext } from 'react'
import { AutocompleteInput } from '../../../../components'
import { Placeholder } from '../../../../components'
import { SyntheticEventType } from '../../../../types'
import { useProducts } from 'frontend-shopify'
import { ShopifyContext } from 'frontend-shopify'
import { IconButton } from '../../../../components'
import { cn } from 'frontend-shadcn'
import { Collapse } from '../../../core'
import { X } from 'lucide-react'
import Image from 'next/image'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	direction?: 'row' | 'column'
	className?: string
}

const ShopifyProductInput: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_product',
		handleChange,
		className,
	} = props

	const { enabled } = useContext(ShopifyContext) as any

	const { loading, product, products, setProduct, findProduct, findProducts } =
  useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (newValue) => {
		findProducts(newValue)
		if (newValue == '') {
			setProduct(null)
		}
	}

  const handleClear = () => {
    handleChange({
      target: {
        name,
        value: '',
      },
    })
    setProduct(null)
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

	if (!enabled){
		return (
			<Placeholder
				title="Shopify setup required"
				description="Shopify provider is not setup"
			/>
		)
  }

	return (
		<div className={cn('flex flex-col space-y-4', className)}>
			<Collapse in={!!product?.id}>		
        <div className="relative rounded-lg overflow-hidden">
          <Image
            height={180}
            width={180}
            src={product?.images?.edges?.[0]?.node?.url}
            alt={product?.title}						
            className='object-cover rounded-lg'
          />				
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute top-4 right-4">
            <IconButton onClick={ handleClear }>
              <X className="h-4 w-4" />
            </IconButton>
          </div>
        </div>		
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
		</div>
	)
}

export default ShopifyProductInput
