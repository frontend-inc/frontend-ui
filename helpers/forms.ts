type FormMetafieldParams = {
	enableName?: boolean
	enableCompany?: boolean
	enablePhone?: boolean
	enableReason?: boolean
	enableMessage?: boolean
	reasonOptions?: string[]
}

export const buildFormMetafields = (params: FormMetafieldParams) => {
	const {
		enableName,
		enableCompany,
		enablePhone,
		enableReason,
		enableMessage,
		reasonOptions = [],
	} = params || {}

	let metafields = [] as any

	if (enableName) {
		metafields.push({
			label: 'Name',
			name: 'name',
			placeholder: 'Full Name',
			variant: 'string',
		})
	}

	if (enableCompany) {
		metafields.push({
			label: 'Company',
			name: 'company',
			placeholder: 'Company',
			variant: 'string',
		})
	}

	if (enablePhone) {
		metafields.push({
			label: 'Phone',
			name: 'phone',
			placeholder: 'Phone',
			variant: 'string',
		})
	}

	if (enableReason) {
		metafields.push({
			label: 'Reason',
			name: 'reason',
			placeholder: 'Reason',
			variant: 'select',
			options: reasonOptions,
		})
	}

	if (enableMessage) {
		metafields.push({
			label: 'Message',
			name: 'message',
			placeholder: 'Message',
			variant: 'text',
		})
	}

	return metafields
}
