export type FieldVariantTypes =
	| 'array'
	| 'audio'
	| 'email'
	| 'habtm'
	| 'html'
	| 'string'
	| 'text'
	| 'number'
	| 'float'
	| 'boolean'
	| 'date'
	| 'datetime'
	| 'price'
	| 'phone'
	| 'url'
	| 'rating'
	| 'image'
	| 'video'
	| 'file'
	| 'json'
	| 'state'
	| 'country'
	| 'location'
	| 'select'
	| 'products'
	| 'shopify_products'
	| 'user'
	| 'team'

export type FieldDbType =
	| 'string'
	| 'text'
	| 'integer'
	| 'float'
	| 'boolean'
	| 'date'
	| 'datetime'
	| 'jsonb'
	| 'habtm'
	| 'belongs_to'

export type FieldCategoryType =
	| 'Text'
	| 'Date'
	| 'Numbers'
	| 'Geographic'
	| 'Media'
	| 'Data'
	| 'Boolean'
	| 'Reference'
	| 'Shop'
	| 'Shopify'

export type FieldVariantType = {
	icon: string
	category: FieldCategoryType
	db_type: FieldDbType
	variant: FieldVariantTypes
	label: string
	description: string
	array: boolean
	color: string
}

export type FieldBase = {
	label?: string
	name?: string
	db_type?: FieldDbType
	variant?: FieldVariantTypes
	position: number
	editable: boolean
	visible: boolean
	internal: boolean
	reference: boolean
	array: boolean
	options?: string[]
	default?: string
	validate_required?: boolean
	validate_unique?: boolean
	validate_length?: boolean
	validate_length_min?: number
	validate_length_max?: number
	validate_format?: boolean
	validate_format_regex?: string
	validate_numericality?: boolean
	validate_numericality_min?: number
	validate_numericality_max?: number
	validate_inclusion?: boolean
	validate_inclusion_options?: string[]
}

export type FieldType = FieldBase & {
	id?: number
	collection_id?: number
	handle: boolean
	title?: string
	created_at: string
	updated_at: string
	foreign_key?: boolean
	foreign_collection_id?: number
	foreign_field_id?: number
	foreign_content_type?: string
}
