import React from 'react'
import { Placeholder } from '../..'
import { Box } from '@mui/material'
import { useResourceContext } from 'frontend-js'

type CollectionEmptyProps = {
  icon?: any
  title?: string
  description?: string
}

const CollectionEmpty: React.FC<CollectionEmptyProps> = (props) => {

  const { resources } = useResourceContext()
  const { icon, title, description } = props || {}
  
  if(resources?.length > 0) return null;
  return (
    <Box sx={ sx.root }>
      <Placeholder
        icon={icon}
        title={title}
        description={description}
      />
    </Box>
  )
}

export default CollectionEmpty

const sx = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
}