import { ButtonType } from '..'

type BuildActionParams = {
	enableEdit?: boolean
	handleEdit?: (item: any) => void
	enableDelete?: boolean
	handleDelete?: (item: any) => void
	buttons?: ButtonType[]
}

export const buildActions = ({
	enableEdit,
	enableDelete,
	handleEdit,
	handleDelete,
	buttons,
}: BuildActionParams) => {
	const EDIT_ACTION = {
		label: 'Edit',
		color: 'secondary',
		name: 'click',
		onClick: handleEdit,
	}

	const DELETE_ACTION = {
		label: 'Delete',
		color: 'error',
		name: 'click',
		onClick: handleDelete,
	}

	let newActions = <ButtonType[]>[]
	if (buttons) {
		newActions = newActions.concat(buttons)
	}
	if (enableEdit && handleEdit) {
		//@ts-ignore
		newActions.push(EDIT_ACTION)
	}
	if (enableDelete && handleDelete) {
		//@ts-ignore
		newActions.push(DELETE_ACTION)
	}
	return newActions
}
