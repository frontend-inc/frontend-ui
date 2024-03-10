export type MenuLinkType = {
	name: string
	path: string
	url?: string
	icon?: string
	position: number
	parent_id?: number | null
  shopify_collection?: string
	children: MenuLinkType[] | []
}

export type NotificationType = {
	text: string
	path?: string
	position: number
	buttonText?: string
	discountCode?: string
	copyToClipboard?: boolean
}
