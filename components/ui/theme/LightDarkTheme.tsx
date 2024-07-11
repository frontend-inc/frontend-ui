import React, { useState, useEffect, useContext } from 'react'
import { ThemeProvider } from '../../../context'
import { ThemeContext } from '../../../context'

type LightDarkThemeProps = {
	theme: 'dark' | 'light' | 'accent'
	children: React.ReactNode
}

const LightDarkTheme: React.FC<LightDarkThemeProps> = (props) => {
	const { theme: lightDarkTheme, children } = props || {}

	const [bgcolor, setBgcolor] = useState('#FFFFFF')

	const { theme: muiTheme } = useContext(ThemeContext)

	useEffect(() => {
		switch (lightDarkTheme) {
			case 'dark':
				setBgcolor('#000000')
				break
			case 'light':
				setBgcolor('#FFFFFF')
				break
			case 'accent':
				setBgcolor(muiTheme?.palette?.primary?.main)
				break
		}
	}, [lightDarkTheme, muiTheme?.palette?.primary?.main])

	return (
		<ThemeProvider muiTheme={muiTheme} bgcolor={bgcolor}>
			{children}
		</ThemeProvider>
	)
}

export default LightDarkTheme
