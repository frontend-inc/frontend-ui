import React, { useState } from 'react'
import FormContext from './FormContext'
import { FormFieldType } from '../types'

type FormProviderProps = {
  createFields: FormFieldType[]
  editFields: FormFieldType[]
	children: React.ReactNode
}

const FormProvider = (props: FormProviderProps) => {
	
  const { 
    createFields, 
    editFields,
    children  
  } = props || {}

	const [openDeleteModal, setOpenDeleteModal] = useState(false)
	const [openFormModal, setOpenFormModal] = useState(false)  

	const value = {    
    createFields,
    editFields,
		openDeleteModal,
    setOpenDeleteModal,
    openFormModal,
    setOpenFormModal,    
	}

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default FormProvider
