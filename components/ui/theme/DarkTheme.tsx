import React, { useState, useEffect, useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { muiTheme } from '../../../theme'
import light from '../../../theme/palette/light'
import dark from '../../../theme/palette/dark'

type DarkThemeProps = {
	children: React.ReactNode
}

const DarkTheme: React.FC<DarkThemeProps> = (props) => {
	const { children } = props || {}
	return (
		<ThemeProvider 
      theme={
        createTheme({
          ...muiTheme,
          //@ts-ignore 
          palette: dark 
        })
    }>
			{children}
		</ThemeProvider>
	)
}

export default DarkTheme
