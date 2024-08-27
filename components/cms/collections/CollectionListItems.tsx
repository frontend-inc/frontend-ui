import React, { useContext } from 'react'
import { Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import { CollectionListItem, DataLayout } from '../..'
import { useForms } from '../../../hooks'
import { ButtonType, DisplayFieldType } from '../../../types'

export type CollectionListItemsProps = {
  grid?: boolean
	href?: string
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	enableSharing?: boolean
	enableUsers?: boolean
  slots?: {
    list?: any
    item?: any
  }
}

const CollectionListItems: React.FC<CollectionListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		setResource,
		loading,
		resources,
		page,
		numPages,
    loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
    grid = false,
		buttons = [],
		style = 'list',
		href,
    handleClick,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
		enableLikes = false,
		enableUsers = false,
		enableRatings = false,
		enableComments = false,
    slots={
      list: {},
      item: {}
    }
	} = props

	const handleShowClick = (resource) => {
    if(handleClick){
      handleClick(resource)
    } else if(href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	const { 
    handleEdit, 
    handleDeleteClick 
  } = useForms()

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
    <Stack direction="column" spacing={2}>
      <DataLayout { ...slots.list } grid={grid} loading={loading}>
        {resources?.map((resource, index) => (
          <CollectionListItem             
            key={index}
            style={style}
            resource={resource}
            displayFields={displayFields}
            handleClick={() => handleShowClick(resource)}
            enableEdit={enableEdit}
            enableDelete={enableDelete}
            handleEdit={() => handleEdit(resource)}
            handleDelete={() => handleDeleteClick(resource)}
            buttons={ buttons }            
            enableUsers={enableUsers}
            enableComments={enableComments}
            enableFavorites={enableFavorites}
            enableLikes={enableLikes}
            enableRatings={enableRatings}
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
            { ...slots.item }
          />
        ))}
      </DataLayout>
      <LoadMore 
        page={page} 
        numPages={numPages} 
        handlePaginate={handlePaginate} 
      />
    </Stack>
	)
}

export default CollectionListItems
