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
	url?: string
	children: MenuLinkType[] | []
}
