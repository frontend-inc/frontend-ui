import React, { useState } from 'react'
import { useResource, useResourceContext } from 'frontend-js'
import { Box, Button, IconButton } from '@mui/material'
import { PlaylistAdd } from '@mui/icons-material'
import { Modal } from '../../../components'
import { RemoteAutosuggest } from '../../../components'
import { useAuth } from 'frontend-js'
import { useApp } from '../../../hooks'

type AddToListProps = {
  variant?: 'icon' | 'button'
	resource: any
	color?: string
}

const AddToList: React.FC<AddToListProps> = (props) => {
	const { variant = 'icon', resource: selected, color = 'text.secondary' } = props

  const { currentUser } = useAuth()
  const { setAuthOpen } = useApp()

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
	
  const { foreignUrl } = useResourceContext()

  const {
    loading,
    resource,
    handleChange,
    addReferences 
  } = useResource({
    name: 'document',
    url: foreignUrl
  })

	const handleClick = () => {
    if(!currentUser?.id) return setAuthOpen(true);
		setOpen(true)
	}

  const handleSubmit = async () => {
    if(!currentUser?.id) return setAuthOpen(true);
    if(resource?.id){
      await addReferences(resource?.id, [selected?.id])
      setOpen(false)
    }    
  }

	return (
    <>
      <Box>
        <IconButton
          onClick={handleClick}
          sx={{
            color,
            '&:hover': {
              color,
            },
            ...(variant == 'icon' ? sx.icon : sx.button),          
          }}
        >
          <PlaylistAdd fontSize="small" />
        </IconButton>      
      </Box>
      <Modal 
        title="Add to List"
        loading={ loading }
        open={ open }
        handleClose={handleClose}
        buttons={
          <Button 
            fullWidth
            onClick={ handleSubmit }
            variant="contained"
            color="primary"
            startIcon={ <PlaylistAdd fontSize="small" /> }
          >
            Add to List
          </Button>
        }
      >
        <RemoteAutosuggest           
          url={ foreignUrl }
          name="id"
          displayField='title'
          value={ resource?.id }
          handleChange={ handleChange }
          defaultQuery={{
            current_user: true 
          }}
        />
      </Modal>
    </>
	)
}

export default AddToList

const sx = {
	icon: {},
	button: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.main',
		color: 'text.secondary',
		'&:hover': {
			bgcolor: 'background.main',
			color: 'text.secondary',
		},
	},
}
