'use client'

import React from 'react'
import OptionButton from './ShopifyOptionButton'
import { Typography } from '../../../components'

type ShopifyProductVariantOptionsProps = {
	name: string
	values: string[]
	selected: string
	handleChange: (name: string, value: string) => void
}

const ShopifyProductVariantOptions: React.FC<
	ShopifyProductVariantOptionsProps
> = (props) => {
	const { name, values, selected, handleChange } = props

	return (
		<div className="flex flex-col items-start justify-center space-y-2">
			<Typography variant="body1">Select {name}</Typography>
			<div className="flex flex-row flex-wrap gap-2.5">
				{values?.map((value) => (
					<OptionButton
						key={value}
						value={value}
						name={name}
						active={selected === value}
						handleClick={handleChange}
					>
						{value}
					</OptionButton>
				))}
			</div>
		</div>
	)
}

export default ShopifyProductVariantOptions
