'use client'

import React, { useContext } from 'react'
import { AppContext } from '../../context'

const useApp = () => {
	const {
		app,
		setApp,
		name,
		description,
		logo,
    editable,
		apiUrl,
		clientUrl,
		enableShopify,
		enableStripe,
		enableSubscription,
		alert,
		setAlert,
		authOpen,
		setAuthOpen,
		myAccountOpen,
		setMyAccountOpen,
		menuOpen,
		setMenuOpen,
		loading,
		loaded,
		setLoaded,
		setLoading,
	} = useContext(AppContext)

	return {
		name,
		description,
		app,
		setApp,
		logo,
    editable,
		apiUrl,
		clientUrl,
		enableShopify,
		enableStripe,
		enableSubscription,
		alert,
		setAlert,
		authOpen,
		setAuthOpen,
		menuOpen,
		setMenuOpen,
		myAccountOpen,
		setMyAccountOpen,
		loading,
		loaded,
		setLoaded,
		setLoading,
	}
}

export default useApp
