'use client'

import React, { useEffect, useState } from 'react'
import { Autosuggest } from '../../../components'
import { SyntheticEventType } from '../../../types'
import { useCollections } from 'frontend-shopify'

type ShopifyAutosuggestProps = {
	value?: any
	name?: string
	label?: string
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	enableDelete?: boolean
	direction?: 'row' | 'column'
}

const ShopifyCollectionAutosuggest: React.FC<ShopifyAutosuggestProps> = (
	props
) => {
	const { value, label, placeholder, handleChange } = props

	const [options, setOptions] = useState([])
	const { collections, findCollections } = useCollections()

	useEffect(() => {
		if (collections) {
			setOptions(
				collections?.map((collection) => ({
					label: collection?.title,
					value: collection?.handle,
					image: collection?.image?.url,
				}))
			)
		}
	}, [collections])

	useEffect(() => {
		findCollections(100)
	}, [])

	return (
		<Autosuggest
			label={label}
			name={'shopify_collection'}
			value={value}
			options={options}
			placeholder={placeholder}
			handleChange={handleChange}
			enableClear
		/>
	)
}

export default ShopifyCollectionAutosuggest
