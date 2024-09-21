import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { ResourceHeader, Icon, AlertModal } from '../../../components'
import { ResourceHeaderProps } from '../../../components/cms/resources/ResourceHeader'
import { useProducts } from '../../../hooks'

type AdminProductHeaderProps = ResourceHeaderProps

const AdminProductHeader: React.FC<AdminProductHeaderProps> = (props) => {

  const { handleReload } = props || {}

  const [open, setOpen] = useState(false)

  const {
    loading,
    generateAiProducts 
  } = useProducts()

  const handleGenerateAiClick = () => {
    setOpen(true)
  }
  
  const handleGenerateAi = async () => {
    await generateAiProducts()
    setOpen(false)    
    if(handleReload){
      handleReload()
    }
  }

  return(
    <>
    <ResourceHeader 
      { ...props }
      secondaryAction={
        <IconButton sx={ sx.iconButton } onClick={ handleGenerateAiClick}>
          <Icon name="Wand" />
        </IconButton>        
      }
    />
    <AlertModal
      loading={loading}
      open={open}
      handleClose={() => setOpen(false)}
      icon="Wand"
      title="Generate products using AI"
      description="Are you sure you want to use AI to generate products?"      
      handleConfirm={ handleGenerateAi }
    />
    </>
  )
}

export default AdminProductHeader

const sx = {
  iconButton: {
    minWidth: 44,
    borderRadius: 1,
    bgcolor: 'secondary.main',
    '&:hover': {
      bgcolor: 'secondary.dark'
    }
  }
}