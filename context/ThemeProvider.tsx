'use client'

import React, { useEffect } from 'react'
import ThemeContext from './ThemeContext'
import { cn } from 'frontend-shadcn'

type ThemeProviderProps = {
  mode?: string	
	primaryColor?: string	
	headerFont?: string
	bodyFont?: string
	borderRadius?: number
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
	
  const {
    mode,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
		children,
	} = props || {}

	const value = {
    mode,
		primaryColor,
		headerFont,
		bodyFont,
		borderRadius,
	}

  useEffect(() => {
    if(headerFont){
      document.documentElement.style.setProperty('--font-header', headerFont)
    }
    if(bodyFont){
      document.documentElement.style.setProperty('--font-body', bodyFont)  
    }        
    if(borderRadius){
      document.documentElement.style.setProperty('--border-radius', '0.0em')
    }
  }, [headerFont, bodyFont, borderRadius])

	return(
    <ThemeContext.Provider value={value}>
      <div className={cn(mode, 'w-full')}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
