export type MenuLinkTypes =
	| 'dropdown'
	| 'link'
	| 'sublink'
	| 'shopify_collection'
	| 'shopify_product'
	| 'url'

export type MenuLinkType = {
	name: string
	path: string
	header?: boolean
	url?: string
	icon?: string
	link_type?: MenuLinkTypes
	position: number
	document_id?: number
	collection_id?: number
	parent_id?: number | null
	shopify_handle?: string
	children: MenuLinkType[] | []
}

export type NotificationTypes =
	| 'text'
	| 'page'
	| 'document'
	| 'shopify_collection'
	| 'shopify_product'
	| 'url'

export type NotificationType = {
	text: string
	path?: string
	url?: string
	position: number
	notification_type: NotificationTypes
	page_id?: number
	collection_id?: number
	document_id?: number
}
