type FormMetafieldParams = {
	fieldName?: boolean
	fieldCompany?: boolean
	fieldPhone?: boolean
	fieldReason?: boolean
	fieldMessage?: boolean
	reasonOptions?: string[]
}

export const buildFormFields = (params: FormMetafieldParams) => {
	const {
		fieldName,
		fieldCompany,
		fieldPhone,
		fieldReason,
		fieldMessage,
		reasonOptions = [],
	} = params || {}

	let metafields = [] as any

	if (fieldName) {
		metafields.push({
			label: 'Name',
			name: 'name',
			placeholder: 'Full Name',
			variant: 'string',
		})
	}

	if (fieldCompany) {
		metafields.push({
			label: 'Company',
			name: 'company',
			placeholder: 'Company',
			variant: 'string',
		})
	}

	if (fieldPhone) {
		metafields.push({
			label: 'Phone',
			name: 'phone',
			placeholder: 'Phone',
			variant: 'string',
		})
	}

	if (fieldReason) {
		metafields.push({
			label: 'Reason',
			name: 'reason',
			placeholder: 'Reason',
			variant: 'select',
			options: reasonOptions,
		})
	}

	if (fieldMessage) {
		metafields.push({
			label: 'Message',
			name: 'message',
			placeholder: 'Message',
			variant: 'text',
		})
	}

	return metafields
}
