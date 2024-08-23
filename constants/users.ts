import { COUNTRIES } from './countries'
import { STATES } from './states'

export const USER_ROLES = [
	{ value: 'admin', label: 'Admin' },
	{ value: 'user', label: 'User' },
]

export const USER_FORM_FIELDS = [
	{ name: 'avatar', variant: 'image' },
	{ label: 'First name', name: 'first_name', variant: 'string' },
	{ label: 'Last name', name: 'last_name', variant: 'string' },
	{ label: 'About me', name: 'about_me', variant: 'text' },
]

export const USER_ADDRESS_FIELDS = [
	{
		label: 'Address',
		name: 'address1',
		variant: 'string',
		placeholder: 'Street',
	},
	{
		label: '',
		name: 'address2',
		variant: 'string',
		placeholder: 'Unit or Apartment',
	},
	{ label: 'City', name: 'city', variant: 'string' },
	{
		label: 'State',
		name: 'state',
		variant: 'select',
		options: STATES,
		conditions: [{ name: 'country', operator: 'eq', value: 'US' }],
	},
	{
		label: 'Country',
		name: 'country',
		variant: 'select',
		options: COUNTRIES,
		default: 'US',
	},
	{ label: 'Zipcode', name: 'zipcode', variant: 'string' },
]
