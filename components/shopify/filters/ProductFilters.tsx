import React, { useState, useEffect } from 'react'
import { ProductCollectionFilter } from 'frontend-shopify'
import { Popup } from '../..'
import {
	FilterList,
	ColorFilters,
	SizeFilters,
	StyleFilters,
	MaterialFilters,
	ProductTypeFilters,
	VendorFilters,
	TagFilters,
	InStockFilter,
} from '..'
import {
	findColorFilters,
	findSizeFilters,
	findStyleFilters,
	findMaterialFilters,
	findProductTypeFilters,
	findVendorFilters,
	findTagFilters,
} from 'frontend-shopify'
import { Button, Stack } from '@mui/material'
import { ListFilter } from 'lucide-react'

type ProductFilterButtonProps = {
	filters: ProductCollectionFilter[]
	enableInStockFilter?: boolean
	colorOptions?: string[]
	sizeOptions?: string[]
	styleOptions?: string[]
	materialOptions?: string[]
	vendorOptions?: string[]
	productTypeOptions?: string[]
	tagOptions?: string[]
	handleFilterColor: (value: string) => void
	handleFilterSize: (value: string) => void
	handleFilterStyle: (value: string) => void
	handleFilterMaterial: (value: string) => void
	handleFilterVendor: (value: string) => void
	handleFilterProductType: (value: string) => void
	handleFilterTag: (value: string) => void
	handleFilterVariantOption?: (name: string, value: string | number) => void
	handleFilterInStock?: () => void
}

const ProductFilterButton: React.FC<ProductFilterButtonProps> = (props) => {
	const [colorsCount, setColorsCount] = useState(0)
	const [sizesCount, setSizesCount] = useState(0)
	const [stylesCount, setStylesCount] = useState(0)
	const [materialsCount, setMaterialsCount] = useState(0)
	const [vendorsCount, setVendorsCount] = useState(0)
	const [productTypesCount, setProductTypesCount] = useState(0)
	const [tagsCount, setTagsCount] = useState(0)
	const [open, setOpen] = useState(false)

	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (ev) => {
		setAnchorEl(ev.currentTarget)
		setOpen(true)
	}
	const handleClose = () => setOpen(false)

	const {
		filters = [],
		enableInStockFilter = false,
		colorOptions = [],
		sizeOptions = [],
		styleOptions = [],
		materialOptions = [],
		vendorOptions = [],
		tagOptions = [],
		productTypeOptions = [],
		handleFilterColor,
		handleFilterSize,
		handleFilterStyle,
		handleFilterMaterial,
		handleFilterVendor,
		handleFilterProductType,
		handleFilterTag,
		handleFilterInStock,
	} = props

	useEffect(() => {
		if (filters) {
			setColorsCount(findColorFilters(filters).length)
			setSizesCount(findSizeFilters(filters).length)
			setStylesCount(findStyleFilters(filters).length)
			setMaterialsCount(findMaterialFilters(filters).length)
			setVendorsCount(findVendorFilters(filters).length)
			setProductTypesCount(findProductTypeFilters(filters).length)
			setTagsCount(findTagFilters(filters).length)
		}
	}, [filters])

	return (
		<>
			<Button
				sx={sx.button}
				onClick={handleClick}
				variant="text"
				color="secondary"
				startIcon={<ListFilter />}
			>
				Filter
			</Button>
			<Popup anchorEl={anchorEl} open={open} handleClose={handleClose} p={1}>
				<Stack spacing={2}>
					{colorOptions?.length > 0 && (
						<FilterList label="Colors" count={colorsCount}>
							<ColorFilters
								filters={filters}
								options={colorOptions}
								handleClick={handleFilterColor}
							/>
						</FilterList>
					)}
					{sizeOptions?.length > 0 && (
						<FilterList label="Size" count={sizesCount}>
							<SizeFilters
								filters={filters}
								options={sizeOptions}
								handleClick={handleFilterSize}
							/>
						</FilterList>
					)}
					{styleOptions?.length > 0 && (
						<FilterList label="Style" count={stylesCount}>
							<StyleFilters
								filters={filters}
								options={styleOptions}
								handleClick={handleFilterStyle}
							/>
						</FilterList>
					)}
					{materialOptions?.length > 0 && (
						<FilterList label="Material" count={materialsCount}>
							<MaterialFilters
								filters={filters}
								options={materialOptions}
								handleClick={handleFilterMaterial}
							/>
						</FilterList>
					)}
					{tagOptions?.length > 0 && (
						<FilterList label="Tags" count={tagsCount}>
							<TagFilters
								filters={filters}
								options={tagOptions}
								handleClick={handleFilterTag}
							/>
						</FilterList>
					)}
					{vendorOptions?.length > 0 && (
						<FilterList label="Vendor" count={vendorsCount}>
							<VendorFilters
								filters={filters}
								options={vendorOptions}
								handleClick={handleFilterVendor}
							/>
						</FilterList>
					)}
					{productTypeOptions?.length > 0 && (
						<FilterList label="Product Type" count={productTypesCount}>
							<ProductTypeFilters
								filters={filters}
								options={productTypeOptions}
								handleClick={handleFilterProductType}
							/>
						</FilterList>
					)}
					{enableInStockFilter && (
						<FilterList label="In-Stock">
							<InStockFilter
								filters={filters}
								handleClick={handleFilterInStock}
							/>
						</FilterList>
					)}
				</Stack>
			</Popup>
		</>
	)
}

export default ProductFilterButton

const sx = {
	button: {
		color: 'text.secondary',
	},
}
