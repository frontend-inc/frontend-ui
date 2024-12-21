export type MenuType = {
	label: string
	name: string
	internal?: boolean
	links: MenuLinkType[]
}

export type SocialLinkType = {
  url: string
  provider: string
}

export type MenuLinkType = {
  id: string
  parent_id: string | null
  label: string
  description?: string
  position: number
  link_type: string
  path: string
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
