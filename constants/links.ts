const DEFAULT_LINK_OPTIONS = [
	//{ value: 'dropdown', label: 'Dropdown', icon: 'Folder' },
	{ value: 'page', label: 'Page', icon: 'StickyNote' },
	{ value: 'url', label: 'URL', icon: 'ExternalLink' },
	{ value: 'document', label: 'Document', icon: 'Database' },
]

export const LINK_OPTIONS = {
	default: DEFAULT_LINK_OPTIONS,
	shopify: [
		...DEFAULT_LINK_OPTIONS,
		{
			value: 'shopify_collection',
			label: 'Collection',
			icon: 'ShoppingCart',
		},
		{ value: 'shopify_product', label: 'Product', icon: 'Shirt' },
	],
}

export const SOCIAL_LINK_PROVIDERS = [
	{ value: 'Facebook', label: 'Facebook' },
	{ value: 'Twitter', label: 'Twitter' },
	{ value: 'Instagram', label: 'Instagram' },
	{ value: 'Linkedin', label: 'LinkedIn' },
	{ value: 'YouTube', label: 'YouTube' },
	{ value: 'TikTok', label: 'TikTok' },
]
