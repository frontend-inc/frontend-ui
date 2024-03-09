export type MenuLink = {
	name: string
	path: string
	url?: string
	icon?: string
	position: number
	parent_id?: number | null
	children: MenuLink[] | []
}

export type Notification = {
	text: string
	path?: string
	position: number
	buttonText?: string
	discountCode?: string
	copyToClipboard?: boolean
}
