import React from 'react'
import { CardActionArea } from '@mui/material'
import { Image } from '../../../components'
import { imageFromVideoUrl } from '../../../helpers'

type CellImageProps = {
	value: {
    url
  }
	handleClick?: (value?: string) => void
	size?: number
}

const CellImage: React.FC<CellImageProps> = (props) => {
	const { value, size = 64, handleClick } = props
	let src = imageFromVideoUrl(value?.url)
	return (
    <CardActionArea sx={{ p: 0 }} onClick={ handleClick }>
      <Image
        disableBorder
        disableBorderRadius
        src={src}
        width={size}
        height={size}
        alt={'Image'}
      />
    </CardActionArea>
	)
}

export default CellImage
