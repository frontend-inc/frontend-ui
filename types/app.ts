export type MenuType = {
	label: string
	name: string
	internal?: boolean
	links: MenuLinkType[]
}

export type MenuLinkTypes =
	| 'dropdown'
	| 'link'
	| 'sublink'
	| 'shopify_collection'
	| 'shopify_product'
	| 'url'

export type MenuLinkType = {
	label: string
	path: string
	url?: string
	icon?: string
	link_type?: MenuLinkTypes
	position: number
	shopify_product?: string
	children: MenuLinkType[] | []
}

export type PolicyLinkType = {
	name: string
	url: string
	position?: number
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
