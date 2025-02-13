'use client'

import React, { useState } from 'react'
import AppContext from './AppContext'

type AppProviderProps = {
	apiUrl: string
	clientUrl: string
	children: React.ReactNode
	logo?: any
	name: string
	isEditing?: boolean
	enableShopify?: boolean
	enableStripe?: boolean
}

const AppProvider = (props: AppProviderProps) => {
	const {
		name,
		logo,
		apiUrl,
		clientUrl,
		enableShopify,
		enableStripe,
		isEditing,
		children,
	} = props || {}

	const [alert, setAlert] = useState()
	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const [authOpen, setAuthOpen] = useState(false) // Auth modal
	const [myAccountOpen, setMyAccountOpen] = useState(false) // My account modal
	const [menuOpen, setMenuOpen] = useState(false) // Mobile menu

	const [app, setApp] = useState<any>()

	const value = {
		name,
		apiUrl,

		app,
		setApp,

		logo,
		clientUrl,

		alert,
		setAlert,

		authOpen,
		setAuthOpen,

		myAccountOpen,
		setMyAccountOpen,

		menuOpen,
		setMenuOpen,

		isEditing,

		enableShopify,
		enableStripe,

		loading,
		loaded,
		setLoaded,
		setLoading,
	}

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
