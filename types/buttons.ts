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
	action_type: ActionType
  color?: string
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
