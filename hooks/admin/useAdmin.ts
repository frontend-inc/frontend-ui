'use client'

import React, { useContext } from 'react'
import { AdminContext } from '../../context'

const useAdmin = () => {
	const {
		apiUrl,
		clientUrl,
		loading,
		setLoading,
		leftTab,
		setLeftTab,
		rightTab,
		setRightTab,
		openLayoutLeft,    
		setOpenLayoutLeft,
    
    openMobileLeft,
    setOpenMobileLeft,

		openLayoutRight,
		setOpenLayoutRight,

    openMobileRight,
    setOpenMobileRight,

		toggleLayoutRight,
	} = useContext(AdminContext)

	return {
		apiUrl,
		clientUrl,
		loading,
		setLoading,
		leftTab,
		setLeftTab,
		rightTab,
		setRightTab,
		openLayoutLeft,
		setOpenLayoutLeft,
		openLayoutRight,
		setOpenLayoutRight,
		toggleLayoutRight,
    openMobileLeft,
    setOpenMobileLeft,
    openMobileRight,
    setOpenMobileRight,
	}
}

export default useAdmin
