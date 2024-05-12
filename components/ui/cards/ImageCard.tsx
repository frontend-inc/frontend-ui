import React from 'react'
import ImageGrid from './variants/ImageGrid'
import ImageList from './variants/ImageList'
import { CardProps } from '../../../types'

const ImageCard: React.FC<CardProps> = (props) => {
	const { variant } = props
	return variant == 'grid' ? (
		<ImageGrid {...props} />
	) : (
		<ImageList {...props} />
	)
}

export default ImageCard
