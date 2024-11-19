export const HANDLE = { label: 'Handle', name: 'handle', variant: 'slug' }
export const TITLE = { label: 'Title', name: 'title', variant: 'string' }
export const SUBTITLE = {
	label: 'Subtitle',
	name: 'subtitle',
	variant: 'string',
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

export const NAME = { label: 'Name', name: 'name', variant: 'string' }
export const ABOUT = { label: 'About', name: 'about', variant: 'text' }
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
	variant: 'date',
}
export const START_DATE = {
	label: 'Start Date',
	name: 'start_date',
	variant: 'datetime',
}
export const END_DATE = {
	label: 'End Date',
	name: 'end_date',
	variant: 'datetime',
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
	post: [IMAGE, TITLE, LABEL, CATEGORY, SUBTITLE, DESCRIPTION, TAGS],
	article: [
		IMAGE,		
		TITLE,   
    SUBTITLE, 
    PUBLISHED_AT,
		LABEL,
		CATEGORY,    
		HTML,		
		TAGS,
	],
	place: [
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
		IMAGE,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		START_DATE,
		END_DATE,
		LOCATION,
		TAGS,
	],
	person: [IMAGE, NAME, ABOUT, SUBTITLE, CATEGORY, DESCRIPTION, TAGS],
	product: [
		IMAGE,		
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		PRICE,
		TAGS,
	],
	image: [IMAGE, TITLE, SUBTITLE, LABEL, CATEGORY, TAGS],
	video: [
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
		IMAGE,
		AUDIO,
		TITLE,
		SUBTITLE,
		LABEL,
		CATEGORY,
		DESCRIPTION,
		TAGS,
	],
	file: [FILE, TITLE, SUBTITLE, LABEL, CATEGORY, DESCRIPTION, TAGS],
	youtube: [
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
	place: [IMAGE, TITLE, SUBTITLE, CATEGORY, DESCRIPTION, LOCATION, TAGS],
	person: [IMAGE, NAME,SUBTITLE, CATEGORY, ABOUT, TAGS],
	event: [
		IMAGE,
		TITLE,
    SUBTITLE, 
		CATEGORY,		
		DESCRIPTION,
		START_DATE,
		END_DATE,
		LOCATION,
		TAGS,
	],
	product: [IMAGE, TITLE,SUBTITLE, PRICE, CATEGORY, DESCRIPTION, TAGS],
	image: [IMAGE, TITLE, SUBTITLE, DESCRIPTION, TAGS],
	video: [VIDEO, TITLE, SUBTITLE, CATEGORY, DESCRIPTION, TAGS],
	audio: [AUDIO, TITLE, SUBTITLE, CATEGORY, DESCRIPTION, TAGS],
	file: [FILE, TITLE, SUBTITLE, CATEGORY, DESCRIPTION],
	youtube: [YOUTUBE_VIDEO, TAGS],
	vimeo: [VIMEO_VIDEO, TAGS],
	soundcloud: [SOUNDCLOUD_AUDIO, TAGS],
	shopify: [SHOPIFY_PRODUCT, TAGS],
}
