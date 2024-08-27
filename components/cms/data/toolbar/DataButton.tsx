import React from 'react'
import { Button } from '@mui/material'
import { Icon } from '../../../../components'
import { ResourceButtonType } from '../../../../types'

export type DataButtonProps = {
  button: ResourceButtonType
  selected: any[]
}

const DataButton: React.FC<DataButtonProps> = (props) => {

  const { button, selected=[] } = props || {}
  
  const { 
    onClick,
    variant = 'contained',
    label = 'Click me',
    icon,
    color = 'primary',
  } = button || {}

  return (
    <Button       
      variant={ variant }
      color={ color }
      onClick={
        selected ? () => onClick(selected) : undefined 
      }
      startIcon={ 
        icon && 
        <Icon 
          name={icon}
          size={ 20 }
          color='text.primary'
        />        
      }
    >
      { label }
    </Button>  
  )        
}

export default DataButton