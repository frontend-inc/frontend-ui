import { ImageType, VideoType, UserType } from '../types'

export type DocumentLinkType = {
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
	title: string
	description: string
	image: ImageType
	video: VideoType
	data: Record<string, any>
	locale?: string
	tags?: string[]
	position?: number
	published: boolean
	content_type?: string
	shopify_handle?: string
	created_at: string
	updated_at: string
	document_links: DocumentLinkType[]
	links: DocumentType[]
}
