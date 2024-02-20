import React, { useState } from 'react'
import AppContext from './AppContext'

type AppProviderProps = {
	clientUrl?: string
	children: React.ReactNode
	logo?: any
}

const AppProvider = (props: AppProviderProps) => {
	const { children, clientUrl, logo } = props || {}

	const [alert, setAlert] = useState()
	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const [authOpen, setAuthOpen] = useState(false) // Auth modal
	const [menuOpen, setMenuOpen] = useState(false) // Mobile menu

	const [app, setApp] = useState<any>()

	const value = {
		app,
		setApp,

		logo,
		clientUrl,

		alert,
		setAlert,

		authOpen,
		setAuthOpen,

		menuOpen,
		setMenuOpen,

		loading,
		loaded,
		setLoaded,
		setLoading,
	}

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
