import React from 'react'
import { LoadMore, SortableList } from '../..'
import { useResourceContext } from 'frontend-js'
import { DataItem, DataLayout } from '../..'
import { useForms } from '../../../hooks'

export type SortableRelatedListItemsProps = {
	enableShow?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleClick: (resource: any) => void
	pagination?: React.FC<any>
	component?: React.FC<any>
	slots?: {
		item?: any
		list?: any
	}
}

const SortableRelatedListItems: React.FC<SortableRelatedListItemsProps> = (
	props
) => {
	const {
		loading,
		resources,
		page,
		numPages,
		query = {},
		setQuery,
		updatePositions,
		reloadMany,
	} = useResourceContext()

	const {
		enableShow,
		enableEdit,
		enableDelete,
		handleClick,
		pagination: Pagination = LoadMore,
		component: Component = DataItem,
		slots = {
			list: {},
			item: {},
		},
	} = props

	const { handleShow, handleEdit, handleDeleteClick } = useForms()

	const handleShowClick = (resource: any) => {
		const relatedProduct = resource?.relatedProduct
		if (handleClick) {
			handleClick(relatedProduct)
		} else if (enableShow) {
			handleShow(relatedProduct)
		}
	}

	const handlePaginate = () => {
		let perPage = (query?.per_page || 12) + 12
		setQuery({
			...query,
			per_page: perPage,
		})
	}

	const handleDrop = async (sorted: any) => {
		await updatePositions(sorted)
		reloadMany()
	}

	return (
		<DataLayout {...slots.list} loading={loading}>
			<SortableList
				droppableId="sortable"
				handleDrop={handleDrop}
				items={resources}
				renderItem={(resource) => {
					const relatedProduct = resource?.related_product
					return (
						<Component
							{...slots.item}
							sortable
							key={resource?.id}
							resource={relatedProduct}
							enableShow={enableShow}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							handleClick={() => handleShowClick(relatedProduct)}
							handleEdit={enableEdit ? () => handleEdit(relatedProduct) : undefined}
							handleDelete={
								enableDelete ? () => handleDeleteClick(relatedProduct) : undefined
							}
						/>
					)
				}}
			/>
			<Pagination
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</DataLayout>
	)
}

export default SortableRelatedListItems
