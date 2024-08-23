import React from 'react'
import { Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { DataListItem, DataLayout } from '../..'
import { useForms } from '../../../hooks'

export type DataListItemsProps = {
	enableShow?: boolean
  enableEdit?: boolean
  enableDelete?: boolean
  handleShow?: (resource: any) => void
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

const DataListItems: React.FC<DataListItemsProps> = (props) => {

	const {
		setResource,
		loading,
		resources,
		page,
		numPages,
		query = {},
		setQuery,
		setOpenShow,
	} = useResourceContext()

	const {
    enableShow,
    enableEdit,
    enableDelete,
    handleShow,
		handleClick,  
    pagination: Pagination = LoadMore,
    component: Component = DataListItem,
    slots={
      item: {},
      list: {},
    },
		...rest
	} = props

  const { 
    handleEdit,
    handleDeleteClick 
  } = useForms()

  const handleShowClick = (resource: any) => {
    if(enableShow){
      setResource(resource)
      setOpenShow(true)      
    }
  }

	const handleLoadMore = () => {
		let perPage = (query?.per_page || 12) + 12
		setQuery({
			...query,
			per_page: perPage,
		})
	}

	return (
    <DataLayout {...slots.list } loading={loading}>
      {resources?.map((resource, index) => (
        <Component
          key={index}
          label={ resource?.label }
          image={ resource?.image?.url }
          primary={resource?.title}
          secondary={ resource?.description }
          handleClick={ handleClick ? 
              () => handleClick(resource) : 
              () => handleShowClick(resource) }
          enableShow={ enableShow }
          enableEdit={ enableEdit }
          enableDelete={ enableDelete }
          handleEdit={ enableEdit ? () => handleEdit(resource) : undefined }
          handleDelete={ enableDelete ? () => handleDeleteClick(resource) : undefined }
          { ...slots.item }
        />
      ))}
      <Pagination   
        page={page} 
        numPages={numPages} 
        loadMore={handleLoadMore} 
      />
    </DataLayout>
	)
}

export default DataListItems
