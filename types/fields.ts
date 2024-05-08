export type FieldVariantType =
	| 'array'
	| 'audio'
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
	| 'url'
	| 'rating'
	| 'image'
	| 'video'
	| 'file'
	| 'json'
	| 'state'
	| 'country'
	| 'select'
	| 'shopify_product'
	| 'shopify_collection'
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

export type FieldVariant = {
	icon: string
	category: 'Text' | 'Dates' | 'Numbers' | 'Media' | 'Data' | 'Reference'
	db_type: FieldDbType
	variant: FieldVariantType
	label: string
	description: string
	array: boolean
	color: string
}

export type FieldBase = {
	label?: string
	name?: string
	db_type?: FieldDbType
	variant?: FieldVariantType
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
