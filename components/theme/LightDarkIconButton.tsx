import React from 'react'
import { IconButton } from '../../components'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from '@remixicon/react'

const LightDarkIconButton: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <IconButton    
      onClick={handleClick}
      className="flex items-center justify-center"
    >
      {theme === 'light' ? 
        <RiSunFill className="text-md text-foreground transition duration-200 hover:scale-110" /> : 
        <RiMoonFill className="text-md text-foreground transition duration-200 hover:scale-110" />
      }
    </IconButton>
  )
}

export default LightDarkIconButton