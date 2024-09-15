import React, { useState, useEffect, useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { muiTheme } from '../../../theme'
import light from '../../../theme/palette/light'
import dark from '../../../theme/palette/dark'

type LightThemeProps = {
	children: React.ReactNode
}

const LightTheme: React.FC<LightThemeProps> = (props) => {
	const { children } = props || {}
	return (
		<ThemeProvider 
      theme={
        createTheme({
          ...muiTheme,
          //@ts-ignore 
          palette: light 
        })
    }>
			{children}
		</ThemeProvider>
	)
}

export default LightTheme
