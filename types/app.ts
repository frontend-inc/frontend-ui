export type MenuType = {
	label: string
	name: string
	internal?: boolean
	links: MenuLinkType[]
}

export type MenuLinkType = {
	label: string
	path: string
	url?: string
	icon?: string
	position: number
	children: MenuLinkType[] | []
}

export type PolicyLinkType = {
	label: string
  title: string 
	handle: string
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
