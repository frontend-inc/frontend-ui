export const ACTION_TYPES = [
	{ label: 'Manual', value: 'manual' },
	{ label: 'Resource created', value: 'resources.create' },
	{ label: 'Resource updated', value: 'resources.save' },
	{ label: 'Resource deleted', value: 'resources.delete' },
]

export const WEBHOOK_EVENT_TYPES = [
	{ label: 'User registered', value: 'users.create' },
	{ label: 'User updated', value: 'users.update' },
	{ label: 'Resource created', value: 'resources.create' },
	{ label: 'Resource updated', value: 'resources.save' },
	{ label: 'Resource deleted', value: 'resources.delete' },
]

export const ZAP_TYPES = [
	{ label: 'Send email', value: 'email' },
	{ label: 'Send webhook', value: 'webhook' },
]
