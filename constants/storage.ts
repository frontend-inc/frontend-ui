import { ImageContentType, VideoContentType } from '../types'

export const MAX_FILE_SIZE = 5000000

export const IMAGE_FORMATS: ImageContentType[] = [
	'jpg',
	'jpeg',
	'png',
	'gif',
	'bmp',
	'webp',
	'heic',
]

export const VIDEO_FORMATS: VideoContentType[] = [
	'mp4',
	'webm',
	'ogg',
	'mov',
	'm4v',
]

export const IMAGE_OR_VIDEO_FORMATS: (ImageContentType | VideoContentType)[] = [
	...IMAGE_FORMATS,
	...VIDEO_FORMATS,
]
