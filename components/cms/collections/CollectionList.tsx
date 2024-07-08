import React, { useContext, useState, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'
import { Stack } from '@mui/material'
import {
	LoadMore,
} from '../..'
import { useQuery } from 'frontend-js'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import {
  ResourceModal,
	CollectionCards,
	Placeholder,
} from '../../../components'
import { useForms } from '../../../hooks'
import { 
  ActionType, 
  DisplayFieldType 
} from '../../../types'

export type CollectionListProps = {
  url: string 
  href?: string
	style: 'list' | 'avatar' | 'card' | 'cover' | 'text' 
	editing?: boolean
	perPage?: number
	actions: ActionType[]
	displayFields: DisplayFieldType[]	
	buttonText?: string
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
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const [open, setOpen] = useState(false)

  const { 
    resource, 
    setResource 
  } = useResourceContext()

	const {
		actions = [],		
		style = 'card',
		href,
		displayFields = [],
		buttonText,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
    enableLikes = false,
    enableUsers = false,
    enableRatings = false,
    enableComments = false,
		emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
    ...rest
	} = props

  const { 
    loading,    
    resources,
    page,
    numPages,
    loadMore      
  } = useQuery()

	const handleNavigate = (resource) => {
    if(href){
      if (clientUrl && href && resource?.handle) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        router.push(`${clientUrl}${href}/${resource?.handle}`)
      }
    }else{
      setResource(resource)
      setOpen(true)    
    }
	}

	const { handleClick = handleNavigate } = props

  const {
    handleEdit,
    handleDeleteClick
  } = useForms()

	return (
    <>
      <Stack direction="column" spacing={2}>
        <CollectionCards
          actions={actions}            
          style={style}
          resources={resources}
          displayFields={displayFields}
          handleClick={handleClick}
          buttonText={buttonText}
          enableGradient={enableGradient}          
          enableOverlay={enableOverlay}
          enableEdit={enableEdit}
          enableDelete={enableDelete}
          enableUsers={enableUsers}
          enableFavorites={enableFavorites}
          enableRatings={enableRatings}
          handleEdit={handleEdit}
          handleDelete={handleDeleteClick}
          { ...rest }
        />          
        <LoadMore 
          page={page}
          numPages={numPages}
          loadMore={loadMore}
        />              
      </Stack>   
      {!loading && resources?.length == 0 && (
        <Placeholder
          enableBorder
          icon={emptyIcon}
          title={emptyTitle}
          description={emptyDescription}
        />
      )}
      <ResourceModal
        open={ open }
        handleClose={ () => setOpen(false) }
        actions={ actions }
        displayFields={displayFields}
        enableOverlay={enableOverlay}
        enableEdit={enableEdit}
        enableFavorites={enableFavorites}
        enableLikes={enableLikes}
        enableRatings={enableRatings}
        enableComments={enableComments}
        enableUsers={enableUsers}
        handleEdit={() => handleEdit(resource)}
      />
    </>
	)
}

export default CollectionList

