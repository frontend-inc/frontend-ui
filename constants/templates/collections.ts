import * as fields from '../../constants/templates/field-templates'
import * as COLORS from '@mui/material/colors'

export const COLLECTION_ITEM = {
	icon: 'Box',
	name: 'items',
	label: 'Blank',
	color: COLORS.deepPurple[500],
	description: 'An basic item',
	fields: [...fields.BASE_FIELD_TEMPLATES],
	data: [],
}

export const COLLECTION_ARTICLE = {
	icon: 'FileText',
	name: 'articles',
	label: 'Article',
	color: COLORS.orange[500],
	description: 'A blog post or article',
	fields: [
		...fields.BASE_FIELD_TEMPLATES,
		fields.PUBLISHED_AT_FIELD_TEMPLATE,
		fields.TOPICS_FIELD_TEMPLATE,
	],
}

export const COLLECTION_PERSON = {
	icon: 'User',
	name: 'people',
	label: 'Person',
	color: COLORS.pink[500],
	description: 'A person',
	fields: [
		fields.HANDLE_FIELD_TEMPLATE,
		fields.IMAGE_FIELD_TEMPLATE,
		fields.LABEL_FIELD_TEMPLATE,
		fields.FULL_NAME_FIELD_TEMPLATE,
		fields.BIO_FIELD_TEMPLATE,
		fields.TAGS_FIELD_TEMPLATE,
	],
}

export const COLLECTION_COMPANY = {
	icon: 'Building2',
	name: 'companies',
	label: 'Company',
	color: COLORS.blue[500],
	description: 'A company',
	fields: [
		fields.HANDLE_FIELD_TEMPLATE,
		fields.IMAGE_FIELD_TEMPLATE,
		fields.LABEL_FIELD_TEMPLATE,
		fields.COMPANY_FIELD_TEMPLATE,
		fields.DESCRIPTION_FIELD_TEMPLATE,
		fields.TAGS_FIELD_TEMPLATE,
	],
}

export const COLLECTION_EVENT = {
	icon: 'Calendar',
	name: 'events',
	label: 'Event',
	color: COLORS.amber[500],
	description: 'An event with dates',
	fields: [
		...fields.BASE_FIELD_TEMPLATES,
		fields.START_DATE_FIELD_TEMPLATE,
		fields.END_DATE_FIELD_TEMPLATE,
		fields.DURATION_MINUTES_FIELD_TEMPLATE,
	],
}

export const COLLECTION_PRODUCT = {
	icon: 'ShoppingBag',
	name: 'products',
	label: 'Product',
	color: COLORS.lightGreen[500],
	description: 'A product for sale',
	fields: [
		...fields.BASE_FIELD_TEMPLATES,
		fields.PRICE_FIELD_TEMPLATE,
		fields.COMPARE_AT_PRICE_FIELD_TEMPLATE,
	],
}

export const COLLECTION_TEMPLATES = [
	COLLECTION_ITEM,
	COLLECTION_ARTICLE,
	COLLECTION_PERSON,
	COLLECTION_COMPANY,
	COLLECTION_EVENT,
	COLLECTION_PRODUCT,
]
