import React from 'react'
import { CardActionArea } from '@mui/material'
import { Image } from '../../../components'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'

type CellImageProps = {
	value: {
		url
	}
	handleClick?: any
	size?: number
}

const CellImage: React.FC<CellImageProps> = (props) => {
	const { value, size = 64, handleClick } = props
	let src = cloudinaryImageFromVideoUrl(value?.url)
	return (
		<CardActionArea sx={{ p: 0 }} onClick={handleClick}>
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
