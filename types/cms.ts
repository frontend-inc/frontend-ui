import { ImageType, VideoType, UserType } from '../types'

export type ContentTypes =
	| 'post'
	| 'article'
	| 'place'
	| 'event'
	| 'person'
	| 'product'
	| 'image'
	| 'video'
	| 'audio'
	| 'file'
	| 'youtube'
	| 'vimeo'
	| 'soundcloud'
	| 'shopify'

export type ReferenceType = {
	id: number
	target_id: number
	source_id: number
	target: DocumentType
	source: DocumentType
	position: number
	updated_at: string
	created_at: string
}

export type DocumentType = {
	id?: number
	user_id?: number
	user?: UserType
	handle: string
	label: string
	title: string
	subtitle: string
	description: string
	category: string
	image: ImageType
	video: VideoType
	file: any
	data: Record<string, any>
	locale?: string
	tags?: string[]
	position?: number
	published: boolean
	content_type: ContentTypes
	shopify_product?: string
	references: ReferenceType[]
	created_at: string
	updated_at: string
}

export type CollectionType = {
	id?: number
	label?: string
	handle?: string
	title?: string
	description?: string
	image?: {
		url: string
	}
	tags?: string[]
	published?: boolean
	documents?: DocumentType[]
}
