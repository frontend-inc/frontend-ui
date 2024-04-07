export type ActionType = {
	id?: number
	icon?: string
	label: string
	name: 'webhook' | 'navigate' | 'url'
	color?: string
	variant?: 'contained' | 'outlined' | 'text'
	page_id?: number
	component_id?: number
	url: string
	path?: string
	options?: {
		method: 'GET' | 'POST' | 'PUT' | 'DELETE'
		headers: Record<string, string>
		body: Record<string, string>
		'content-type': string
	}
}
