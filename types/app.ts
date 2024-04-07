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
	url?: string
	icon?: string
	link_type?: MenuLinkTypes
	position: number
	parent_id?: number | null
	shopify_collection?: string
	children: MenuLinkType[] | []
}

export type NotificationTypes = 
  'text' | 
  'page' | 
  'document' | 
  'shopify_collection' | 
  'shopify_product' |
  'url'   

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
