import React, { useContext, useState, useEffect } from 'react'
import { ThemeContext, ThemeProvider } from '../../../context'

type ColorModeThemeProps = {
	mode?: 'light' | 'dark' | 'accent'
	children?: React.ReactNode
}

const ColorModeTheme: React.FC<ColorModeThemeProps> = (props) => {
	const { mode = 'light' } = props || {}
	const { theme } = useContext(ThemeContext)
	const [bgcolor, setBgcolor] = useState('#ffffff')

	useEffect(() => {
		if (mode) {
			switch (mode) {
				case 'light':
					setBgcolor('#ffffff')
					break
				case 'dark':
					setBgcolor('#000000')
					break
				case 'accent':
					setBgcolor(theme?.palette?.primary?.main)
					break
			}
		}
	}, [mode, theme])

	return (
		<ThemeProvider muiTheme={theme} bgcolor={bgcolor}>
			{props.children}
		</ThemeProvider>
	)
}

export default ColorModeTheme
