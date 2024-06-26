import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { 
  Box, 
  Button,
  Stack, 
  Typography,
} from '@mui/material'
import {
	Image,
	DisplayFields,
	TouchableOpacity,
	FavoriteButton,
  AvgRating,
  UserButton
} from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { Icon, Actions } from '../../../components'
import {useSortable} from '@dnd-kit/sortable';
import { buildActions } from '../../../helpers'

type KanBanCardProps = CardProps & {
  id: string
  ref?: any
  attributes?: any
  listeners?: any 
  enableDragging?: boolean
}

const KanBanCard: React.FC<KanBanCardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)

	const {
    id,
		actions,
		resource,
		displayFields = [],
		href,
		height = 200,
		textVariant = 'caption',
		handleClick,
		objectFit = 'cover',
    enableDragging=false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites,
    enableRatings,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,
    enableUsers 
	} = props || {}

  const {
    attributes,
    listeners,
    setNodeRef,
  } = useSortable({
    id: id
  })

	const router = useRouter()

	const { title, image } = resource || {}

  return (
    <Stack 
      direction="column"
      sx={{
        ...sx.root,
        ...(enableDragging && sx.rootDragging),
      }}
    >
		<Stack 
      direction="column"        
      ref={setNodeRef}
      { ...attributes }
      { ...listeners }
    >
      <Typography sx={ sx.title } color="text.primary" variant={textVariant}>
        {truncate(title)}
      </Typography>       
      { image?.url && (
        <Box sx={ sx.image }>
          <Image
            src={image?.url}
            height={height}
            objectFit={objectFit}
            alt={title}
            disableBorderRadius
            handleClick={handleClick}
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
          />       
        </Box>     
      )}
      <Stack direction="row" alignItems='flex-start'>
        <Stack
          direction="column"
          spacing={0.5}
          sx={ sx.content }
        >     
          { enableRatings == true && (
            <AvgRating resource={resource} size="small" />
          )}
          <DisplayFields fields={displayFields} resource={resource} />
          { enableUsers && (
            <UserButton 
              user={ resource?.user }
            />            
          )}
        </Stack>	        
      </Stack>        		          
		</Stack>
    <Box sx={ sx.actionsContainer }>
      <Button 
        onClick={ handleClick }
        size="small"
        variant="contained"
        color="secondary"
        sx={ sx.button }
      >
        DETAILS
      </Button>   
      <Stack direction="row" alignItems="flex-end">
        {enableFavorites == true && (
          <FavoriteButton handle={resource?.handle} />
        )}
        <Actions 
          numVisible={0} 
          actions={buildActions({
            enableEdit,
            handleEdit,
            actions,
          })} 
          resource={resource} 
        />
      </Stack>
    </Box>
  </Stack>
  
	)
}

export default KanBanCard

const sx = {
	root: {
    p: 0,
    my: 1,
    width: 260,
    cursor: 'pointer',
		borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: 'background.default',
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 2,      
    }
	},
  rootDragging: {
    boxShadow: 2,
    transform: 'rotate(3deg)'
  },
  dragHandle: {
    width: 32,
    minWidth: 32,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    py: 1,    
    cursor: 'grab',
    '&:active': {
      cursor: 'grabbing'
    }
  },
  actions: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
	image: { 
    pt: 1,   
    overflow: 'hidden',
    borderRadius: theme => `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		p: 1    
	},	
  header: {
    ml: 1,
    borderBottom: '1px solid',
    borderColor: 'divider',
  },
  title: {
    px: 1,
    pt: 1,
    width: "100%"
  },
	description: {
		maxWidth: '240px',
	},
  actionsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    px: 1,
    pb: 1
  }
}
