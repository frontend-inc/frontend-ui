import { ActionType } from '..'

type BuildActionParams = {
	enableEdit?: boolean
	handleEdit?: (item: any) => void
	enableDelete?: boolean
	handleDelete?: (item: any) => void
	actions?: ActionType[]
}

export const buildActions = ({
	enableEdit,
	enableDelete,
	handleEdit,
	handleDelete,
	actions,
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

	let newActions = <ActionType[]>[]
	if (actions) {
		newActions = newActions.concat(actions)
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
