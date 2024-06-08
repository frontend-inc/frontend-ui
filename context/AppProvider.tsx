import React, { useState } from 'react'
import AppContext from './AppContext'

type AppProviderProps = {
	clientUrl?: string
	children: React.ReactNode
	logo?: any
	name: string
}

const AppProvider = (props: AppProviderProps) => {
	const { children, clientUrl, name, logo } = props || {}

	const [alert, setAlert] = useState()
	const [loading, setLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)

	const [authOpen, setAuthOpen] = useState(false) // Auth modal
	const [myAccountOpen, setMyAccountOpen] = useState(false) // My account modal

	const [creditCardOpen, setCreditCardOpen] = useState(false) // Credit card modal

	const [authorizationOpen, setAuthorizationOpen] = useState(false) // App authorization
	const [menuOpen, setMenuOpen] = useState(false) // Mobile menu

	const [app, setApp] = useState<any>()

	const value = {
		name,
		app,
		setApp,

		logo,
		clientUrl,

		alert,
		setAlert,

		authOpen,
		setAuthOpen,

		creditCardOpen,
		setCreditCardOpen,

		myAccountOpen,
		setMyAccountOpen,

		authorizationOpen,
		setAuthorizationOpen,

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
