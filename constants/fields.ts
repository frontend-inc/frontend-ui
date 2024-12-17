export const CONTENT_TYPE = {
	label: 'Content Type',
	name: 'content_type',
	variant: 'select',
	options: [
		{ label: 'Post', value: 'post', icon: 'ri-file-text-fill' },
		{ label: 'Article', value: 'article', icon: 'ri-file-text-fill' },
		{ label: 'Place', value: 'place', icon: 'ri-map-pin-line' },
		{ label: 'Event', value: 'event', icon: 'ri-calendar-event-fill' },
		{ label: 'Person', value: 'person', icon: 'ri-user-fill' },
		{ label: 'Product', value: 'product', icon: 'ri-shopping-cart-fill' },
		{ label: 'Image', value: 'image', icon: 'ri-image-fill' },
		{ label: 'Video', value: 'video', icon: 'ri-video-fill' },
		{ label: 'Audio', value: 'audio', icon: 'ri-music-fill' },
		{ label: 'File', value: 'file', icon: 'ri-file-fill' },
		{ label: 'Youtube', value: 'youtube', icon: 'ri-youtube-fill' },
		{ label: 'Vimeo', value: 'vimeo', icon: 'ri-vimeo-fill' },
		{ label: 'Soundcloud', value: 'soundcloud', icon: 'ri-soundcloud-fill' },
		{ label: 'Shopify', value: 'shopify', icon: 'ri-shopping-cart-fill' },
	],
}

export const HANDLE = { label: 'Handle', name: 'handle', variant: 'slug' }
export const TITLE = { label: 'Title', name: 'title', variant: 'string' }

export const SUBTITLE = {
	label: 'Subtitle',
	name: 'subtitle',
	variant: 'string',
}

export const HEADLINE = {
	label: 'Headline',
	name: 'subtitle',
	variant: 'string',
}

export const SUBTITLE_TEXT = {
	label: 'Subtitle',
	name: 'subtitle',
	variant: 'text',
}

export const DESCRIPTION = {
	label: 'Description',
	name: 'description',
	variant: 'text',
}

export const HTML = {
	label: 'HTML content',
	name: 'html',
	variant: 'html',
}

export const NAME = { label: 'Name', name: 'title', variant: 'string' }
export const ABOUT = { label: 'About', name: 'description', variant: 'text' }
export const LABEL = { label: 'Label', name: 'label', variant: 'string' }
export const CATEGORY = {
	label: 'Category',
	name: 'category',
	variant: 'string',
}
export const TAGS = { label: 'Tags', name: 'tags', variant: 'array' }

export const IMAGE = { label: 'Image', name: 'image', variant: 'image' }
export const VIDEO = { label: 'Video', name: 'video', variant: 'video' }
export const AUDIO = { label: 'Audio', name: 'audio', variant: 'audio' }
export const FILE = { label: 'File', name: 'file', variant: 'file' }

export const PUBLISHED_AT = {
	label: 'Published At',
	name: 'published_at',
	variant: 'string',
}

export const PRICE = { label: 'Price', name: 'price', variant: 'number' }
export const LOCATION = {
	label: 'Location',
	name: 'location',
	variant: 'string',
}

export const SHOPIFY_PRODUCT = {
	label: 'Shopify Product',
	name: 'shopify_product',
	variant: 'shopify_product',
}
export const YOUTUBE_VIDEO = {
	label: 'Youtube Video',
	name: 'youtube_video',
	variant: 'youtube_video',
}
export const VIMEO_VIDEO = {
	label: 'Vimeo Video',
	name: 'vimeo_video',
	variant: 'vimeo_video',
}
export const SOUNDCLOUD_AUDIO = {
	label: 'Soundcloud Audio',
	name: 'soundcloud_audio',
	variant: 'soundcloud_audio',
}

export const DOCUMENT_FORM_FIELDS = {
	post: [
		CONTENT_TYPE,
		IMAGE,
		TITLE,
		LABEL,
		CATEGORY,
		SUBTITLE,
		DESCRIPTION,
		TAGS,
	],
	article: [
		CONTENT_TYPE,
		IMAGE,
		TITLE,
		SUBTITLE_TEXT,
		PUBLISHED_AT,
		LABEL,
		CATEGORY,
		HTML,
		TAGS,
	],
	place: [
		CONTENT_TYPE,
		IMAGE,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		LOCATION,
		TAGS,
	],
	event: [
		CONTENT_TYPE,
		IMAGE,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		LOCATION,
		TAGS,
	],
	person: [CONTENT_TYPE, IMAGE, NAME, ABOUT, HEADLINE, TAGS],
	product: [
		CONTENT_TYPE,
		IMAGE,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		PRICE,
		TAGS,
	],
	image: [CONTENT_TYPE, IMAGE, TITLE, LABEL, CATEGORY, TAGS],
	video: [
		CONTENT_TYPE,
		IMAGE,
		VIDEO,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	audio: [
		CONTENT_TYPE,
		IMAGE,
		AUDIO,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	file: [
		CONTENT_TYPE,
		FILE,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	youtube: [
		CONTENT_TYPE,
		IMAGE,
		YOUTUBE_VIDEO,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	vimeo: [
		CONTENT_TYPE,
		IMAGE,
		VIMEO_VIDEO,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	soundcloud: [
		CONTENT_TYPE,
		IMAGE,
		SOUNDCLOUD_AUDIO,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	shopify: [
		CONTENT_TYPE,
		IMAGE,
		SHOPIFY_PRODUCT,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		PRICE,
		DESCRIPTION,
		TAGS,
	],
}

export const DOCUMENT_SHOW_FIELDS = {
	post: [IMAGE, TITLE, SUBTITLE, CATEGORY, DESCRIPTION, TAGS],
	article: [IMAGE, TITLE, SUBTITLE, PUBLISHED_AT, CATEGORY, HTML, TAGS],
	place: [
		IMAGE,
		TITLE,
		SUBTITLE,
		LOCATION,
		CATEGORY,
		DESCRIPTION,
		LOCATION,
		TAGS,
	],
	person: [IMAGE, NAME, HEADLINE, CATEGORY, ABOUT, TAGS],
	event: [
		IMAGE,
		TITLE,
		SUBTITLE,
		LOCATION,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	product: [IMAGE, TITLE, SUBTITLE, PRICE, CATEGORY, DESCRIPTION, TAGS],
	image: [IMAGE, TITLE, TAGS],
	video: [VIDEO, TITLE, SUBTITLE, CATEGORY, DESCRIPTION, TAGS],
	audio: [AUDIO, TITLE, SUBTITLE, CATEGORY, DESCRIPTION, TAGS],
	file: [FILE, TITLE, SUBTITLE, CATEGORY, DESCRIPTION],
	youtube: [YOUTUBE_VIDEO, TAGS],
	vimeo: [VIMEO_VIDEO, TAGS],
	soundcloud: [SOUNDCLOUD_AUDIO, TAGS],
	shopify: [SHOPIFY_PRODUCT, TAGS],
}
