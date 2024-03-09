import React, { useContext } from 'react'
import { AppContext } from '../../context'

const useApp = () => {
	const {
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
	} = useContext(AppContext)

	return {
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
}

export default useApp
