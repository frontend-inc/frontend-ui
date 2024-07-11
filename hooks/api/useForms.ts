import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { useAuth, useCollection } from 'frontend-js'

type FormParams = {
	parentResource?: any
}

const useForms = (params?: FormParams) => {
	const { parentResource } = params || {}

	const { currentUser } = useAuth()

	const { setAuthOpen } = useContext(AppContext)

	const {
		delayedLoading: loading,
		errors,
		query = {},
		findMany,
		resource,
		setResource,
		addLinks,
		create,
		update,
		destroy,
		handleChange,
		removeAttachment,
		setOpenShow,
		openDelete,
		setOpenDelete,
		openEdit,
		setOpenEdit,
	} = useCollection()

	const reloadMany = async () => {
		if (parentResource?.id) {
			findMany({
				...query,
				belongs_to: parentResource?.id,
			})
		} else {
			findMany(query)
		}
	}

	const handleAdd = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource({
			id: undefined,
		})
		setOpenShow(false)
		setOpenEdit(true)
	}

	const handleEdit = (item) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(item)
		setOpenShow(false)
		setOpenEdit(true)
	}

	const handleSubmit = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
				if (parentResource?.id && resp?.id) {
					await addLinks(resp.id, [parentResource?.id])
				}
				setResource({})
			}
			if (resp?.id) {
				setOpenEdit(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (item) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(item)
		setOpenDelete(true)
	}

	const handleDelete = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (!resource?.id) return
		await destroy(resource?.id)
		setOpenDelete(false)
		setOpenEdit(false)
		setResource({})
		reloadMany()
	}

	const handleRemove = async (name) => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (!resource?.id) return
		await removeAttachment(resource?.id, name)
	}

	return {
		loading,
		errors,
		resource,
		setResource,

		handleAdd,
		handleEdit,

		handleSubmit,
		handleDelete,
		handleDeleteClick,
		handleRemove,
		handleChange,
		openEdit,
		setOpenEdit,
		openDelete,
		setOpenDelete,
	}
}

export default useForms
