import React from 'react'
import { File as FileIcon } from 'lucide-react'
import { resize, imageFromVideoUrl } from '../../../helpers'
import { VIDEO_FORMATS, IMAGE_OR_VIDEO_FORMATS } from '../../../constants/index'
import { Image } from '../../../components'

type CloudinaryImageProps = {
	src: string
	height?: number
	width?: number
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = (props) => {
	const { src, height, width } = props
	let fileExtension = src.split('.').pop()
	let imageUrl = src
	//@ts-ignore
	if (VIDEO_FORMATS.includes(fileExtension)) {
		imageUrl = imageFromVideoUrl(src)
	} else {
		// convert all images to jpg to ensure that they render correctly
		imageUrl = src.substr(0, src.lastIndexOf('.')) + '.jpg'
	}

	const resizedImageUrl = resize(imageUrl, {
		width: width,
		height: height,
	})

	//@ts-ignore
	const isImageOrVideo = IMAGE_OR_VIDEO_FORMATS.includes(fileExtension)

	return isImageOrVideo ? (
		<Image
			src={resizedImageUrl}
			height={height}
			//@ts-ignore
			width={width}
		/>
	) : (
		<FileIcon size={20} />
	)
}

export default CloudinaryImage
