import React, { useContext } from 'react'
import { ThemeProvider } from '../../../context'
import { ThemeContext } from '../../../context'

type BackgroundColorProps = {
	bgColor: string
	children: React.ReactNode
}

const BackgroundColor: React.FC<BackgroundColorProps> = (props) => {
	const { bgColor='#fcfcfc', children } = props || {}
	const { theme: muiTheme } = useContext(ThemeContext)
	return (
		<ThemeProvider muiTheme={muiTheme} bgcolor={bgColor}>
			{children}
		</ThemeProvider>
	)
}

export default BackgroundColor
