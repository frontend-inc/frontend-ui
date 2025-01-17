export type ActionType =
	| 'page'
	| 'url'
	| 'email'
	| 'sms'
	| 'phone'
	| 'whatsapp'
	| 'copy'
	| 'download'
	| 'share'
	| 'video'
	| 'image'

export type ButtonType = {
	icon?: string
	label: string
	action: ActionType
	color?: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
	variant?: 'solid' | 'ghost' | 'light'
	url?: string
	path?: string
	src?: string
	onClick?: (ev: any) => void
}

export type SocialFieldType = {
	provider: string
	name: string
}
