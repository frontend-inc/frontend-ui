import React, { useContext } from 'react'
import { AppContext, FormContext } from '../../context'
import {    
  useAuth, 
  useQuery, 
  useDocuments 
} from 'frontend-js'

type FormParams = {
  resource?: any 
}

const useForms = (params?: FormParams) => {

  const { 
    resource: _resource 
  } = params || {}

  const { 
    reloadMany  
  } = useQuery()

  const { currentUser } = useAuth()

  const { 
    setAuthOpen
  } = useContext(AppContext)

  const { 
    openDeleteModal,
    setOpenDeleteModal,
    openFormModal,
    setOpenFormModal,
  } = useContext(FormContext)

  const { 
    delayedLoading: loading,
    errors,
    resource,
    setResource,
    addLinks,
    create,
    update,
    destroy,
    handleDataChange,
    removeAttachment,
  } = useDocuments()

	const handleAdd = () => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource({
			id: undefined,
		})
		setOpenFormModal(true)
	}

	const handleEdit = (item) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(item)
		setOpenFormModal(true)
	}

	const handleSubmit = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)        
        if (_resource?.id && resp?.id) {
					await addLinks(resp.id, [_resource?.id])
				}
			}
			if (resp?.id) {
				setResource({})
        setOpenFormModal(false)
				reloadMany()
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	const handleDeleteClick = (item) => {
		if (!currentUser?.id) return setAuthOpen(true)
		setResource(item)
		setOpenDeleteModal(true)
	}

	const handleDelete = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
    if(!resource?.id) return;
		await destroy(resource?.id)
		setOpenDeleteModal(false)
    setOpenFormModal(false)
		setResource({})
		reloadMany()
	}

	const handleRemove = async (name) => {
		if (!currentUser?.id) return setAuthOpen(true)
    if(!resource?.id) return;
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
		handleDataChange,
    openFormModal,
    setOpenFormModal,
    openDeleteModal,
    setOpenDeleteModal
	}
}

export default useForms
