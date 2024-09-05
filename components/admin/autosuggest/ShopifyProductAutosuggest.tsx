import React, { useEffect, useState } from 'react'
import { Autosuggest } from 'frontend-ui/components'
import { useProducts } from 'frontend-shopify/hooks'
import { SyntheticEventType } from 'frontend-ui/types'

type AutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	enableDelete?: boolean
	direction?: 'row' | 'column'
}

const ShopifyProductAutosuggest: React.FC<AutosuggestProps> = (props) => {
	const {
		value,
		label,
		direction = 'column',
		placeholder,
		name = 'shopify_handle',
		handleChange,
	} = props

	const { products, findProducts } = useProducts()

	const [options, setOptions] = useState([])

	const handleInputChange = (keywords) => {
		findProducts(keywords)
	}

	useEffect(() => {
		if (products) {
			setOptions(products?.map((product) => ({
        label: product?.title,
        value: product?.handle,
        image: product?.images?.edges[0]?.node?.url,
      })))
		}
	}, [products])

	useEffect(() => {
		findProducts({
			first: 5,
		})
	}, [])

	return (
		<Autosuggest 
      label={label}
      name={name}
      value={value}
      options={options}
      placeholder={placeholder}
      direction={direction}
      handleChange={handleChange}
      handleInputChange={handleInputChange} 
      enableClear     
    />
	)
}

export default ShopifyProductAutosuggest
