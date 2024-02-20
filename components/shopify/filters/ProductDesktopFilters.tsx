import React, { useState, useEffect } from 'react'
import { ProductCollectionFilter } from 'frontend-shopify'
import {
	ProductFilterButton,
	FilterList,
	ColorFilters,
	SizeFilters,
	StyleFilters,
	MaterialFilters,
	ProductTypeFilters,
	VendorFilters,
	TagFilters,
	InStockFilter,
} from '../../../components/shopify'
import {
	findColorFilters,
	findSizeFilters,
	findStyleFilters,
	findMaterialFilters,
	findProductTypeFilters,
	findVendorFilters,
	findTagFilters,
} from 'frontend-shopify'
import DesktopFilters from './DesktopFilters'
import MobileFilters from './MobileFilters'

type CollectionFiltersProps = {
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

const CollectionFilters: React.FC<CollectionFiltersProps> = (props) => {
	const [colorsCount, setColorsCount] = useState(0)
	const [sizesCount, setSizesCount] = useState(0)
	const [stylesCount, setStylesCount] = useState(0)
	const [materialsCount, setMaterialsCount] = useState(0)
	const [vendorsCount, setVendorsCount] = useState(0)
	const [productTypesCount, setProductTypesCount] = useState(0)
	const [tagsCount, setTagsCount] = useState(0)

	const {
		filters,
		enableInStockFilter = false,
		colorOptions,
		sizeOptions,
		styleOptions,
		materialOptions,
		vendorOptions,
		tagOptions,
		productTypeOptions,
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
			<DesktopFilters>
				{colorOptions && (
					<ProductFilterButton label="Colors" count={colorsCount}>
						<ColorFilters
							filters={filters}
							options={colorOptions}
							handleClick={handleFilterColor}
						/>
					</ProductFilterButton>
				)}
				{sizeOptions && (
					<ProductFilterButton label="Size" count={sizesCount}>
						<SizeFilters
							filters={filters}
							options={sizeOptions}
							handleClick={handleFilterSize}
						/>
					</ProductFilterButton>
				)}
				{styleOptions && (
					<ProductFilterButton label="Style" count={stylesCount}>
						<StyleFilters
							filters={filters}
							options={styleOptions}
							handleClick={handleFilterStyle}
						/>
					</ProductFilterButton>
				)}
				{materialOptions && (
					<ProductFilterButton label="Material" count={materialsCount}>
						<MaterialFilters
							filters={filters}
							options={materialOptions}
							handleClick={handleFilterMaterial}
						/>
					</ProductFilterButton>
				)}
				{vendorOptions && (
					<ProductFilterButton label="Tags" count={tagsCount}>
						<TagFilters
							filters={filters}
							options={tagOptions}
							handleClick={handleFilterTag}
						/>
					</ProductFilterButton>
				)}
				{vendorOptions && (
					<ProductFilterButton label="Vendor" count={vendorsCount}>
						<VendorFilters
							filters={filters}
							options={vendorOptions}
							handleClick={handleFilterVendor}
						/>
					</ProductFilterButton>
				)}
				{productTypeOptions && (
					<ProductFilterButton label="Product Type" count={productTypesCount}>
						<ProductTypeFilters
							filters={filters}
							options={productTypeOptions}
							handleClick={handleFilterProductType}
						/>
					</ProductFilterButton>
				)}
				{enableInStockFilter && (
					<ProductFilterButton label="In-Stock">
						<InStockFilter
							filters={filters}
							handleClick={handleFilterInStock}
						/>
					</ProductFilterButton>
				)}
			</DesktopFilters>
			<MobileFilters>
				{colorOptions && (
					<FilterList label="Colors" count={colorsCount}>
						<ColorFilters
							filters={filters}
							options={colorOptions}
							handleClick={handleFilterColor}
						/>
					</FilterList>
				)}
				{sizeOptions && (
					<FilterList label="Size" count={sizesCount}>
						<SizeFilters
							filters={filters}
							options={sizeOptions}
							handleClick={handleFilterSize}
						/>
					</FilterList>
				)}
				{styleOptions && (
					<FilterList label="Style" count={stylesCount}>
						<StyleFilters
							filters={filters}
							options={styleOptions}
							handleClick={handleFilterStyle}
						/>
					</FilterList>
				)}
				{materialOptions && (
					<FilterList label="Material" count={materialsCount}>
						<MaterialFilters
							filters={filters}
							options={materialOptions}
							handleClick={handleFilterMaterial}
						/>
					</FilterList>
				)}
				{vendorOptions && (
					<FilterList label="Tags" count={tagsCount}>
						<TagFilters
							filters={filters}
							options={tagOptions}
							handleClick={handleFilterTag}
						/>
					</FilterList>
				)}
				{vendorOptions && (
					<FilterList label="Vendor" count={vendorsCount}>
						<VendorFilters
							filters={filters}
							options={vendorOptions}
							handleClick={handleFilterVendor}
						/>
					</FilterList>
				)}
				{productTypeOptions && (
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
			</MobileFilters>
		</>
	)
}

export default CollectionFilters
