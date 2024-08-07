export type ActionNamesType =
	| 'webhook'
	| 'navigate'
	| 'url'
	| 'page'
	| 'email'
	| 'sms'
	| 'phone'
	| 'copy'
	| 'download'
	| 'link'
	| 'print'
	| 'share'
	| 'click'
	| 'stripe_payment_link'

export type ButtonType = {
	id?: number
	icon?: string
	label: string
	name: ActionNamesType
	color?: 'primary' | 'secondary'
	variant?: 'contained' | 'outlined' | 'text'
	page_id?: number
	component_id?: number
	url?: string
	path?: string
	onClick?: (ev: any) => void
	fieldName?: string
	options?: {
		method: 'GET' | 'POST' | 'PUT' | 'DELETE'
		headers: Record<string, string>
		body: Record<string, string>
		'content-type': string
	}
}

export type SocialFieldType = {
	provider: string
	name: string
}
