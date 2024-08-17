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
	id?: number
	icon?: string
	label: string
	action_type: ActionType
	color?: 'primary' | 'secondary'
	variant?: 'contained' | 'outlined' | 'text'
	page_id?: number
	component_id?: number
	url?: string
	path?: string
	onClick?: (ev: any) => void
	fieldName?: string
  action_id?: number
  action?: ActionType 
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
