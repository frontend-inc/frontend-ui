import React, { useContext } from 'react'
import { Stack } from '@mui/material'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import { CollectionListItem, DataLayout } from '../..'
import { useForms } from '../../../hooks'
import { ButtonType, DisplayFieldType } from '../../../types'
import { buildActions } from '../../../helpers'

export type CollectionListItemsProps = {
	href?: string
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'table' | 'text'
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
  component?: React.FC<any>
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
		query = {},
		setQuery,
		setOpenShow,
	} = useResourceContext()

	const {
		buttons = [],
		style = 'card',
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
    component: Component = CollectionListItem,
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

	let grid = false

	const LAYOUTS = {
		list: false,
		card: true,
		avatar: false,
		cover: true,
		chip: false,
		text: false,
		table: false,
	}

	grid = LAYOUTS[style]

	const handlePaginate = () => {
		let perPage = (query?.per_page || 12) + 12
		setQuery({
			...query,
			per_page: perPage,
		})
	}

	return (
    <Stack direction="column" spacing={2}>
      <DataLayout grid={grid}>
        {resources?.map((resource, index) => (
          <Component 
            key={index}
            style={style}
            resource={resource}
            displayFields={displayFields}
            handleClick={() => handleShowClick(resource)}
            buttons={buildActions({
              enableEdit,
              enableDelete,
              handleEdit: () => handleEdit(resource),
              handleDelete: () => handleDeleteClick(resource),
              buttons,
            })}
            enableUsers={enableUsers}
            enableComments={enableComments}
            enableFavorites={enableFavorites}
            enableLikes={enableLikes}
            enableRatings={enableRatings}
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
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
