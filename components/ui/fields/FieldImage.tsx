import React from 'react'
import { Image } from '../../../components'
import { IMAGE_HORIZ_HEIGHT, IMAGE_HORIZ_WIDTH } from '../../../constants/index'

type FieldImageProps = {
	value?: any
	label?: string
	rest?: any
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
}

const FieldImage: React.FC<FieldImageProps> = (props) => {
	const { value, objectFit = 'cover' } = props  
	return <Image src={value?.url || value } height={IMAGE_HORIZ_HEIGHT} objectFit={objectFit} />
}

export default FieldImage
