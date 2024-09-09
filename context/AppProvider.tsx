import React, { useState } from 'react'
import AppContext from './AppContext'

type AppProviderProps = {
	apiUrl: string
	clientUrl: string
	children: React.ReactNode
	logo?: any
	name: string
}

const AppProvider = (props: AppProviderProps) => {
	const { children, apiUrl, clientUrl, name, logo } = props || {}

	const [alert, setAlert] = useState()
	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const [authOpen, setAuthOpen] = useState(false) // Auth modal
	const [myAccountOpen, setMyAccountOpen] = useState(false) // My account modal
	const [creditCardOpen, setCreditCardOpen] = useState(false) // Credit card modal
	const [menuOpen, setMenuOpen] = useState(false) // Mobile menu

	const [app, setApp] = useState<any>()

	const value = {
		name,
		app,
		setApp,

		logo,
		apiUrl,
		clientUrl,

		alert,
		setAlert,

		authOpen,
		setAuthOpen,

		creditCardOpen,
		setCreditCardOpen,

		myAccountOpen,
		setMyAccountOpen,

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
