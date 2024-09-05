import { FieldType } from '../types'

export type CollectionType = {
	id: number
	app_id: number
	name: string
	label: string
	resource_name: string
	class_name: string
	plural_name: string
	singular_name: string
	created_at: string
	updated_at: string
	fields: FieldType[]
}
