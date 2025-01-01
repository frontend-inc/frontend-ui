import React from 'react'
import { Button } from '@nextui-org/react'
import { useResourceContext } from 'frontend-js'

export type ShowButtonProps = {
	children: string
	resource?: any
}

const ShowButton: React.FC<ShowButtonProps> = (props) => {
	const { children = 'View' } = props || {}

	const {
		setResource,
		setOpenShow,
		setOpenEdit,
		setOpenCreate,
		setOpenDelete,
	} = useResourceContext()

	const { resource: _resource, ...rest } = props || {}

	const handleClick = () => {
		if (_resource) {
			setResource(_resource)
		}
		setOpenShow(true)
		setOpenEdit(false)
		setOpenDelete(false)
		setOpenCreate(false)
	}

	return (
		<Button onPress={handleClick} {...rest}>
			{children}
		</Button>
	)
}

export default ShowButton
