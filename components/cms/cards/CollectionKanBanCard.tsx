import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import {
	SecondaryFields,
	SocialButtons,
} from '../../../components'
import { KanBanCard } from '../../../components'
import { CardProps } from '../../../types'
import { ButtonActions } from '../../../components'
import { buildActions } from '../../../helpers'

type KanBanCardProps = CardProps & {
	id: string
	loading?: boolean
	ref?: any
	attributes?: any
	listeners?: any
	enableDragging?: boolean	
}

const CollectionKanBanCard: React.FC<KanBanCardProps> = (props) => {
	const {
		id,
		loading,
		buttons,
		resource,
		displayFields = [],
		height = 200,
		handleClick,
    enableGradient,
    enableOverlay,
		enableDragging = false,
		enableComments,
		enableLikes,
		enableFavorites,
		enableRatings,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		enableUsers,
	} = props || {}

	return (
    <KanBanCard 
      id={ resource?.id }
      primary={ resource?.title }
      enableDragging={ enableDragging }
      loading={ loading }
      image={ resource?.image?.url }
      handleClick={ handleClick }
      secondary={
        <SecondaryFields
          enableRatings={ enableRatings }
          enableUsers={ enableUsers }
          fields={ displayFields }
          resource={ resource }
        />
      }
      actions={ 
        <Box>
          <SocialButtons
						resource={resource}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableComments={enableComments}
					/>
        </Box> 
      }
      secondaryAction={ 
        <ButtonActions
          numVisible={0}
          buttons={buildActions({
            enableEdit,
            enableDelete,
            handleEdit,
            handleDelete,
            buttons,
          })}
          resource={resource}
        />
      }
      slots={{
        image: {
          enableGradient,
          enableOverlay,      
        }
      }}
    /> 				
	)
}

export default CollectionKanBanCard

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
		overflow: 'hidden',
		'&:hover': {
			boxShadow: 2,
		},
	},
	rootDragging: {
		boxShadow: 2,
		transform: 'rotate(3deg)',
	},
	rootLoading: {
		opacity: 0.5,
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
			cursor: 'grabbing',
		},
	},
	button: {
		textTransform: 'uppercase',
	},
	image: {
		overflow: 'hidden',
		borderRadius: (theme) => `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
		width: '100%',
	},
	content: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		p: 1,
	},
	header: {
		ml: 1,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	title: {
		width: '100%',
	},
	description: {
		maxWidth: '240px',
	},
	footer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		px: 1,
		pb: 1,
	},
}
