import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const useTheme = () => {
	const { mode, theme, primaryColor, headerFont, bodyFont, borderRadius } =
		useContext(ThemeContext)

	// These are defined in tailwind.config.js within nextui plugin.
	let themeClass = `${theme}-${mode}`
	if (theme == 'dark') {
		themeClass = 'dark'
	}
	if (theme == 'light') {
		themeClass = 'light'
	}

	return {
		mode,
		theme,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
		themeClass,
	}
}

export default useTheme
