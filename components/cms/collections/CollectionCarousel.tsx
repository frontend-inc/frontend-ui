import React, { useState, useContext } from 'react'
import { ResourceContext, QueryContext } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import { HeroModal, Carousel } from '../../../components'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import CollectionCard from './CollectionCard'
import { ActionType } from '../../../types'
import { useForms } from '../../../hooks'
import { CollectionListProps } from './CollectionList'

export type CollectionCarouselProps = CollectionListProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const CollectionCarousel: React.FC<CollectionCarouselProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		actions,
		href,
    displayFields,

		enableAutoPlay = true,
		enableArrows = true,
		enableDots = false,
		enableGradient = false,
    enableOverlay = false,
    enableEdit = false,
    enableDelete = false,
    enableRatings = false,
    enableUsers = false,    
		enableFavorites = false,
	} = props

  const [open, setOpen] = useState(false)

  const { 
    handleEdit,
    handleDeleteClick 
  } = useForms()

  const { 
    resource, 
    setResource 
  } = useContext(ResourceContext) as any 

	const { 
    loading, 
    resources 
  } = useContext(QueryContext) as any

  const handleClick = (resource) => {
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

	return (
		<Stack 
      spacing={1} 
      sx={{ 
        ...sx.root,
        ...(loading && sx.loading )
      }}
    >
			<Carousel
				enableDots={enableDots}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
			>
				{resources?.map((resource, index) => (
					<Box 
            key={index} 
            sx={{
              ...sx.item,
              pt: enableArrows ? 5 : 1,
              pb: enableDots ? 4 : 1
            }}
          >
						<CollectionCard
							actions={actions}
							style='card'
							resource={resource}
              displayFields={[]}
              enableEdit={enableEdit}
              enableDelete={enableDelete}
              handleEdit={() => handleEdit(resource)}
              handleDelete={() => handleDeleteClick(resource)}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableFavorites={enableFavorites}
						/>
					</Box>
				))}
			</Carousel>
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
		</Stack>
	)
}

export default CollectionCarousel

const sx = {
	root: {
		width: '100%',
	},
  loading: {
    opacity: 0.5
  },
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	item: {
    p: 2,
	}
}
