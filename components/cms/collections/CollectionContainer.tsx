import React, { useContext, useState, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'
import { Button, Stack } from '@mui/material'
import {
	LoadMore,
	GoogleMap,
} from '../..'
import { QueryContext } from 'frontend-js'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import {
  HeroModal,
	CollectionCards,
  CollectionLayout,
	Placeholder,
} from '../../../components'
import { CollectionListProps } from './CollectionList'
import { useForms } from '../../../hooks'

export type CollectContainerProps = CollectionListProps & {	  
  resource?: any
  enableUsers?: boolean
  component?: React.FC<any>
  rest?: any  
}

const CollectionContainer: React.FC<CollectContainerProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const [open, setOpen] = useState(false)

  const { 
    resource, 
    setResource 
  } = useResourceContext()

	const {
    component: RenderList = CollectionCards,
		actions = [],		
		style = 'card',
		href,
		displayFields = [],
		enableGoogleMaps = false,
		buttonText,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
    enableRatings = false,
    enableUsers = false,
		emptyIcon,
		emptyTitle = 'No results found',
		emptyDescription = 'Try changing your search or filters.',
    ...rest
	} = props

  const { 
    loading,    
    resources     
  } = useContext(QueryContext) as any 

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
      <CollectionLayout 
        loading={loading}
        expandRight={enableGoogleMaps}
        rightPanel={
            <GoogleMap
              enableBorder
              zoom={15}
              height={380}
              resources={resources}								            
              displayFields={displayFields}
            />
          }
        >
        <Stack direction="column" spacing={2}>
          <RenderList
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
          <LoadMore />              
        </Stack>    
			</CollectionLayout>			
      {!loading && resources?.length == 0 && (
        <Placeholder
          enableBorder
          icon={emptyIcon}
          title={emptyTitle}
          description={emptyDescription}
        />
      )}
      <HeroModal
        open={ open }
        handleClose={ () => setOpen(false) }
        actions={ actions }
        displayFields={displayFields}
        enableOverlay={enableOverlay}
        enableEdit={enableEdit}
        enableFavorites={enableFavorites}
        enableRatings={enableRatings}
        enableUsers={enableUsers}
        handleEdit={() => handleEdit(resource)}
      />
		</>
	)
}

export default CollectionContainer

