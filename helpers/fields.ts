import { FormFieldConditionType } from "../types"

export const validateFieldConditions = (
	conditions: FormFieldConditionType[],
	item: any
) => {
	let isValid = true
	if (conditions?.length > 0) {
		conditions.forEach((condition) => {
			const { name, operator, value } = condition
			switch (operator) {
				case 'eq':
					if (item[name] !== value) {
						isValid = false
					}
					break
				case 'neq':
					if (item[name] === value) {
						isValid = false
					}
					break
				case 'in':
					if (!value.includes(item[name])) {
						isValid = false
					}
					break
				case 'nin':
					if (value.includes(item[name])) {
						isValid = false
					}
					break
			}
		})
	}
	return isValid
}
