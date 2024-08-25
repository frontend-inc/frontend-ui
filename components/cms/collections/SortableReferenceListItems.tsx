import React from 'react'
import { LoadMore, SortableList } from '../..'
import { useResourceContext } from 'frontend-js'
import { DataItem, DataLayout } from '../..'
import { useForms } from '../../../hooks'

export type SortableReferenceListItemsProps = {
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

const SortableReferenceListItems: React.FC<SortableReferenceListItemsProps> = (props) => {
	
  const {
		loading,
		resources,
		page,
		numPages,
		query = {},
		setQuery,
    updatePositions,
    reloadMany
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

	const { 
    handleShow,
    handleEdit, 
    handleDeleteClick 
  } = useForms()

	const handleShowClick = (resource: any) => {
    const target = resource?.target
    if(handleClick){
      handleClick(target)
    }else if (enableShow) {
			handleShow(target)
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
        droppableId='sortable'
        handleDrop={handleDrop}
        items={resources}
        renderItem={(resource) => {
          const target = resource?.target 
          return(
          <Component
            {...slots.item}
            sortable
            key={ resource?.id }
            resource={target}
            enableShow={enableShow}
            enableEdit={enableEdit}
            enableDelete={enableDelete}
            handleClick={() => handleShowClick(target)}
            handleEdit={enableEdit ? () => handleEdit(target) : undefined}
            handleDelete={
              enableDelete ? () => handleDeleteClick(target) : undefined
            }            
          />
        )}}
      />
			<Pagination 
        page={page} 
        numPages={numPages} 
        handlePaginate={handlePaginate} 
      />
		</DataLayout>
	)
}

export default SortableReferenceListItems
