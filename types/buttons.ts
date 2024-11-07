export type ActionType =
	| 'page'
	| 'url'	
	| 'email'
	| 'sms'
	| 'phone'
	| 'copy'
	| 'download'	

export type ButtonType = {
	icon?: string
	label: string
	variant?: 'default' | 
    'secondary' | 
    'outlined' | 
    'link' | 
    'ghost'
	url?: string
	path?: string
	onClick?: (ev: any) => void
}

export type SocialFieldType = {
	provider: string
	name: string
}
