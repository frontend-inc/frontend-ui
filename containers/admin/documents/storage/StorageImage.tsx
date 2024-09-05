import React from 'react'
import {
  IconButton,
	Card,
} from '@mui/material'
import { Image, Icon } from '../../../../components'
import { ImageType } from '../../../../types'

type StorageImageProps = {
	image?: ImageType
  handleRemove: () => void
}

const StorageImage: React.FC<StorageImageProps> = (props) => {
	const { image, handleRemove } = props
	return (
		<Card sx={sx.root}>
      <Image
        disableBorderRadius
        height={160} 
        width={160} 
        src={image?.url} 
        alt={'media'} 
      />    
      { image?.url && (
        <IconButton size="small" sx={ sx.iconButton } onClick={ handleRemove }>
          <Icon name="X" />
        </IconButton>
      )}
		</Card>
	)
}

export default StorageImage

const sx = {
	root: {
		borderRadius: 1,
		bgcolor: 'background.paper',
		border: '1px solid',
		borderColor: 'divider',
		p: 0,
    width: 160,
    height: 160,
    position: 'relative',
	},
  iconButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    opacity: 0.5, 
    bgcolor: 'background.main',
    color: 'common.white',
    '&:hover': {
      opacity: 1,
      bgcolor: 'background.main', 
    },
  },
	header: {
		py: 0,
		px: 1,
	},
}
