import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const useTheme = () => {
	
  const { 
    mode, 
    primaryColor, 
    headerFont, 
    bodyFont, 
    borderRadius 
  } = useContext(ThemeContext)

	return {
		mode,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
	}
}

export default useTheme
