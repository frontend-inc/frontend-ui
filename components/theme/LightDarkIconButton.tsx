import React from 'react'
import { IconButton } from '../../components'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
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
        <i className="ri-sun-fill text-md text-foreground transition duration-200 hover:scale-110" /> : 
        <i className="ri-moon-fill text-md text-foreground transition duration-200 hover:scale-110" />
      }
    </IconButton>
  )
}

export default LightDarkIconButton