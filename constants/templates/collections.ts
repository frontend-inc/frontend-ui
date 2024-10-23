import * as fields from '../../constants/templates/field-templates'

export const COLLECTION_CUSTOM = {
	icon: 'Box',
	name: 'items',
	label: 'Custom',
	color: 'bg-purple-500',
	description: 'Customize your collection',
	fields: [...fields.BASE_FIELD_TEMPLATES],
	data: [],
}

export const COLLECTION_ARTICLE = {
	icon: 'FileText',
	name: 'articles',
	label: 'Article',
	color: 'bg-orange-500',
	description: 'Blogs, articles, posts, etc.',
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
	color: 'bg-pink-500',
	description: 'People, authors, influencers, etc.',
	fields: [
		fields.HANDLE_FIELD_TEMPLATE,
		fields.IMAGE_FIELD_TEMPLATE,
		fields.LABEL_FIELD_TEMPLATE,
		fields.NAME_FIELD_TEMPLATE,
		fields.ABOUT_ME_FIELD_TEMPLATE,
		fields.TAGS_FIELD_TEMPLATE,
	],
}

export const COLLECTION_PLACE = {
	icon: 'MapPin',
	name: 'places',
	label: 'Place',
	color: 'bg-blue-500',
	description: 'Companies, restaurants, venues, etc.',
	fields: [
		fields.HANDLE_FIELD_TEMPLATE,
		fields.IMAGE_FIELD_TEMPLATE,
		fields.LABEL_FIELD_TEMPLATE,
		fields.NAME_FIELD_TEMPLATE,
		fields.DESCRIPTION_FIELD_TEMPLATE,
		fields.LOCATION_FIELD_TEMPLATE,
		fields.TAGS_FIELD_TEMPLATE,
	],
}

export const COLLECTION_EVENT = {
	icon: 'Calendar',
	name: 'events',
	label: 'Event',
	color: 'bg-amber-500',
	description: 'Meetups, events, conferences, etc.',
	fields: [
		...fields.BASE_FIELD_TEMPLATES,
		fields.START_DATE_FIELD_TEMPLATE,
		fields.END_DATE_FIELD_TEMPLATE,
		fields.DURATION_MINUTES_FIELD_TEMPLATE,
	],
}

export const COLLECTION_VIDEO = {
	icon: 'Video',
	name: 'videos',
	label: 'Video',
	color: 'bg-amber-500',
	description: 'Short videos',
	fields: [
		fields.IMAGE_FIELD_TEMPLATE,
		fields.VIDEO_FIELD_TEMPLATE,
		fields.HANDLE_FIELD_TEMPLATE,
		fields.TITLE_FIELD_TEMPLATE,
		fields.DESCRIPTION_FIELD_TEMPLATE,
	],
}

export const COLLECTION_IMAGE = {
	icon: 'Image',
	name: 'images',
	label: 'Image',
	color: 'bg-amber-500',
	description: 'Photos, logos, etc.',
	fields: [
		fields.IMAGE_FIELD_TEMPLATE,
		fields.HANDLE_FIELD_TEMPLATE,
		fields.TITLE_FIELD_TEMPLATE,
		fields.DESCRIPTION_FIELD_TEMPLATE,
	],
}

export const COLLECTION_TEMPLATES = [
	COLLECTION_CUSTOM,
	COLLECTION_ARTICLE,
	COLLECTION_EVENT,
	COLLECTION_PERSON,
	COLLECTION_PLACE,
	COLLECTION_VIDEO,
	COLLECTION_IMAGE,
]
