import React from 'react'
import { Image, PrimaryButton } from '../../../components'
import { Paper, Stack, Box, Typography } from '@mui/material'
import { ProductCollectionType } from '../../../types'

type AdminProductCollectionCoverProps = {
  productCollection: ProductCollectionType
  handleEdit: () => void
}

const AdminProductCollectionDetails: React.FC<AdminProductCollectionCoverProps> = (props) => {
  const { productCollection, handleEdit } = props || {}
  return(
    <Paper sx={ sx.paper }>
      <Stack direction="row" sx={ sx.root } spacing={1}>
        <Stack direction="row" spacing={2}>
          <Box sx={ sx.image }>
            <Image 
              src={ productCollection?.image?.url }
              alt={ productCollection?.title }
              width={ 96 }
              height={ 96 }
            />
          </Box>
          <Stack direction="column" spacing={0}>
            <Typography variant="subtitle1" color="text.primary">
              { productCollection?.title }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { productCollection?.description }
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <PrimaryButton onClick={ handleEdit }>
            Edit 
          </PrimaryButton>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default AdminProductCollectionDetails

const sx = {
  root: {
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: 96,
    height: 96,
  },
  paper: {
    p: 2
  }
}
