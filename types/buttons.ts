export type ActionType =
	| 'action'
	| 'click'
	| 'navigate'
	| 'navigate_cms'
	| 'navigate_user'
	| 'url'
	| 'page'
	| 'email'
	| 'sms'
	| 'phone'
	| 'copy'
	| 'download'
	| 'link'
	| 'stripe_payment_link'

export type ButtonType = {
	icon?: string
	label: string
	color?: 'primary' | 'secondary'
	variant?: 'contained' | 'outlined' | 'text'
	url?: string
	path?: string
	onClick?: (ev: any) => void			
}

export type SocialFieldType = {
	provider: string
	name: string
}
