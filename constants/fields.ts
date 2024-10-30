import { FieldBase } from '../types'

export const REFERENCE_FIELDS = ['habtm']

export const ATTACHMENT_FIELDS = ['image', 'video', 'file']

export const SYSTEM_FIELDS = [
	'id',
	'title',
  'subtitle',
  'category',
	'description',
	'handle',
	'user_id',
	'team_id',
	'label',	
	'published',
	'status',
	'locale',
	'location',
	'tags',
	'habtm',
	'image',
	'video',
	'audio',
	'attachment',
	'file',
	'lat',
	'lng',
  'youtube_video',
  'vimeo_video',  
  'soundcloud_audio',  
  'calendly_url',  
  'shopify_product'
]

/* SYSTEM FIELDS */

export const ID_FIELD: FieldBase = {
	label: 'ID',
	variant: 'number',
	db_type: 'integer',
	name: 'id',
	internal: true,
	position: 0,
	array: false,
	visible: true,
	editable: false,
	reference: false,
}

export const HANDLE_FIELD: FieldBase = {
	label: 'Handle',
	variant: 'string',
	reference: false,
	db_type: 'string',
	name: 'handle',
	position: 1,
	array: false,
	internal: true,
	visible: true,
	editable: true,
}

export const TITLE_FIELD: FieldBase = {
	label: 'Title',
	variant: 'string',
	reference: false,
	db_type: 'string',
	name: 'title',
	position: 2,
	array: false,
	internal: true,
	visible: true,
	editable: true,
}

export const PUBLISHED_FIELD: FieldBase = {
	label: 'Published',
	variant: 'boolean',
	reference: false,
	db_type: 'boolean',
	name: 'published',
	position: 4,
	array: false,
	internal: true,
	visible: true,
	editable: true,
}

export const LOCALE_FIELD: FieldBase = {
	label: 'locale',
	variant: 'string',
	reference: false,
	db_type: 'string',
	name: 'locale',
	position: 5,
	array: false,
	internal: true,
	visible: true,
	editable: true,
}

export const TAGS_FIELD: FieldBase = {
	label: 'Tags',
	variant: 'array',
	reference: false,
	db_type: 'string',
	name: 'tags',
	position: 6,
	array: true,
	internal: true,
	editable: true,
	visible: false,
}

export const USER_FIELD: FieldBase = {
	label: 'User',
	variant: 'user',
	db_type: 'belongs_to',
	name: 'user',
	internal: true,
	position: 7,
	array: false,
	visible: true,
	editable: false,
	reference: false,
}
