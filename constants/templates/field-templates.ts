export const BASE_FIELD_TEMPLATE = {
	internal: true,
	editable: true,
	visible: true,
	options: [],
	array: false,
	filterable: true,
	sortable: true,
	table_header: true,
	display_FIELD_TEMPLATE: false,
	form_FIELD_TEMPLATE: true,
}

export const HANDLE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: true,
	name: 'handle',
	label: 'Handle',
	db_type: 'string',
	variant: 'string',
	filterable: true,
	sortable: true,
	table_header: true,
	display_FIELD_TEMPLATE: false,
	form_FIELD_TEMPLATE: false,
}

export const LABEL_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'label',
	label: 'Label',
	db_type: 'string',
	variant: 'string',
}

export const TITLE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'title',
	label: 'Title',
	db_type: 'string',
	variant: 'string',
}

export const SUBTITLE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'subtitle',
	label: 'Subtitle',
	db_type: 'string',
	variant: 'string',
	filterable: true,
	sortable: true,
	table_header: true,
	display_FIELD_TEMPLATE: true,
	form_FIELD_TEMPLATE: true,
}

export const FULL_NAME_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'title',
	label: 'Full name',
	db_type: 'string',
	variant: 'string',
}

export const COMPANY_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'title',
	label: 'Company',
	db_type: 'string',
	variant: 'string',
}

export const CAPTION_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'label',
	label: 'Caption',
	db_type: 'string',
	variant: 'string',
}

export const STATUS_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'status',
	label: 'Status',
	db_type: 'string',
	variant: 'string',
}

export const BIO_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'description',
	label: 'About',
	db_type: 'text',
	variant: 'text',
	display_FIELD_TEMPLATE: true,
}

export const DESCRIPTION_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'description',
	label: 'Description',
	db_type: 'text',
	variant: 'text',
	display_FIELD_TEMPLATE: true,
}

export const IMAGE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'image',
	label: 'Image',
	db_type: 'string',
	variant: 'image',
	filterable: false,
	sortable: false,
	table_header: true,
	display_FIELD_TEMPLATE: false,
	form_FIELD_TEMPLATE: false,
}

export const FILE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'file',
	label: 'File',
	db_type: 'string',
	variant: 'file',
	filterable: false,
	sortable: false,
	table_header: true,
	display_FIELD_TEMPLATE: false,
	form_FIELD_TEMPLATE: false,
}

export const PUBLISHED_AT_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	name: 'published_at',
	label: 'Published At',
	db_type: 'datetime',
	variant: 'datetime',
}

export const TAGS_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: true,
	name: 'tags',
	label: 'Tags',
	db_type: 'string',
	variant: 'array',
	array: true,
}

export const TOPICS_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'topics',
	label: 'Topics',
	db_type: 'string',
	variant: 'array',
	array: true,
}

export const START_DATE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'start_date',
	label: 'Start Date',
	db_type: 'datetime',
	variant: 'datetime',
}

export const END_DATE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'end_date',
	label: 'End Date',
	db_type: 'datetime',
	variant: 'datetime',
}

export const DURATION_MINUTES_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'num_minutes',
	label: 'Minutes',
	db_type: 'integer',
	variant: 'number',
}

export const DURATION_SECONDS_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'num_seconds',
	label: 'Seconds',
	db_type: 'integer',
	variant: 'number',
}

export const PRICE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'price',
	label: 'Price',
	db_type: 'float',
	variant: 'price',
}

export const COMPARE_AT_PRICE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'compare_at_price',
	label: 'Compare at price',
	db_type: 'float',
	variant: 'price',
}

export const VIDEO_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'video',
	label: 'Video',
	db_type: 'string',
	variant: 'video',
}

export const ADDRESS1_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'address1',
	label: 'Address Line 1',
	db_type: 'string',
	variant: 'string',
}

export const ADDRESS2_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'address2',
	label: 'Address Line 2',
	db_type: 'string',
	variant: 'string',
}

export const CITY_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'city',
	label: 'City',
	db_type: 'string',
	variant: 'string',
}

export const STATE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'state',
	label: 'State',
	db_type: 'string',
	variant: 'state',
}

export const COUNTRY_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'country',
	label: 'Country',
	db_type: 'string',
	variant: 'country',
}

export const ZIPCODE_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'zipcode',
	label: 'Zipcode',
	db_type: 'string',
	variant: 'string',
}

export const SHOPIFY_PRODUCT_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'shopify_handle',
	label: 'Shopify Product',
	db_type: 'string',
	variant: 'shopify_product',
	filterable: false,
	sortable: false,
	table_header: false,
	display_FIELD_TEMPLATE: false,
	form_FIELD_TEMPLATE: false,
}

export const SHOPIFY_COLLECTION_FIELD_TEMPLATE = {
	...BASE_FIELD_TEMPLATE,
	internal: false,
	name: 'shopify_handle',
	label: 'Shopify List',
	db_type: 'string',
	variant: 'shopify_collection',
	filterable: false,
	sortable: false,
	table_header: false,
	display_FIELD_TEMPLATE: false,
	form_FIELD_TEMPLATE: false,
}

export const BASE_FIELD_TEMPLATES = [
	HANDLE_FIELD_TEMPLATE,
	LABEL_FIELD_TEMPLATE,
	TITLE_FIELD_TEMPLATE,
	SUBTITLE_FIELD_TEMPLATE,
	DESCRIPTION_FIELD_TEMPLATE,
	IMAGE_FIELD_TEMPLATE,
	TAGS_FIELD_TEMPLATE,
]
