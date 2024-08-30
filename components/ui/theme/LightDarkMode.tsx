import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider } from '../../../context'
import { ThemeContext } from '../../../context'

type LightDarkModeProps = {
	mode: 'dark' | 'light' | 'accent'
	children: React.ReactNode
}

const LightDarkMode: React.FC<LightDarkModeProps> = (props) => {
	const { mode, children } = props || {}

	const [bgcolor, setBgcolor] = useState('#fcfcfc')

	const { theme: muiTheme } = useContext(ThemeContext)

	useEffect(() => {
		switch (mode) {
			case 'dark':
				setBgcolor('#000000')
				break
			case 'light':
				setBgcolor('#fcfcfc')
				break
			case 'accent':
				setBgcolor(muiTheme?.palette?.primary?.main)
				break
		}
	}, [mode, muiTheme?.palette?.primary?.main])

	return (
		<ThemeProvider muiTheme={muiTheme} bgcolor={bgcolor}>
			{children}
		</ThemeProvider>
	)
}

export default LightDarkMode
