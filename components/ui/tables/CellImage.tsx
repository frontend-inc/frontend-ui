import React from 'react'
import { Image } from '../../../components'
import { imageFromVideoUrl } from '../../../helpers'

type CellImageProps = {
	value: string
	handleClick?: (value?: string) => void
	size?: number
}

const CellImage: React.FC<CellImageProps> = (props) => {
	const { value, size = 64 } = props
	let src = imageFromVideoUrl(value)
	return (
		<Image
			disableBorder
			disableBorderRadius
			src={src}
			width={size}
			height={size}
			alt={'Image'}
		/>
	)
}

export default CellImage
