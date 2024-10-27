'use client'

import React, { useState } from 'react'
import { ProductType } from '../../../../types'
import {
	Sheet,
	ResourceList,
	Button,
	SortableList,
} from '../../../../components'
import ProductListItem from './ProductListItem'
import ProductToolbar from './ProductToolbar'
import { useAdmin } from '../../../../hooks'
import { sortBy } from 'lodash'

type ProductsInputProps = {
	document: any
	handleUpdateProductPositions: (sorted: number[]) => void
	handleAddProducts: (products: ProductType[]) => void
	handleRemoveProducts: (products: ProductType[]) => void
}

const ProductsInput: React.FC<ProductsInputProps> = (props) => {
	const { apiUrl } = useAdmin()
	const [open, setOpen] = useState(false)

	const {
		document,
		handleUpdateProductPositions,
		handleAddProducts,
		handleRemoveProducts,
	} = props || {}

	const handleAddClick = () => {
		setOpen(true)
	}

	const handleDelete = (reference) => {
		handleRemoveProducts([reference?.product?.id])
	}

	return (
		<div className="w-full">
			<SortableList
				handleDrop={handleUpdateProductPositions}
				items={sortBy(document?.product_references, 'position')}
				renderItem={(reference) => (
					<ProductListItem
						sortable
						enableDelete
						key={reference?.id}
						resource={reference?.product}
						handleClick={() => null}
						handleDelete={() => handleDelete(reference)}
					/>
				)}
			/>
			<div>
				<Button variant="secondary" onClick={handleAddClick}>Add Products</Button>
			</div>
			<Sheet open={open} handleClose={() => setOpen(false)}>
				<ResourceList
					selectable
					enableSearch
					url={`${apiUrl}/products`}
					name="product"
					component={ProductListItem}
					toolbar={ProductToolbar}
					slots={{
						toolbar: {
							handleAddProducts,
						},
					}}
				/>
			</Sheet>
		</div>
	)
}

export default ProductsInput
