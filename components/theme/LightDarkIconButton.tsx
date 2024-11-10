import React from 'react'
import { IconButton } from '../../components'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const LightDarkIconButton: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <IconButton    
      onClick={handleClick}
    >
      {theme === 'light' ? 
        <Sun className="w-5 h-5 text-foreground" /> : 
        <Moon className="w-5 h-5 text-foreground" />
      }
    </IconButton>
  )
}

export default LightDarkIconButton