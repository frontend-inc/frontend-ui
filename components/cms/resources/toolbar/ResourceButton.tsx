import React from 'react'
import { Button } from '@mui/material'
import { ResourceButtonType } from '../../../../types'

export type ResourceButtonProps = ResourceButtonType & {
  selected: any[]
}

const ResourceButton: React.FC<ResourceButtonProps> = (props) => {

  const { 
    onClick,
    variant = 'contained',
    label = 'Click me',
    color = 'primary',
    selected=[]
  } = props || {}

  return (
    <Button       
      variant={ variant }
      color={ color }
      onClick={
        selected ? () => onClick(selected) : undefined 
      }
    >
      { label }
    </Button>  
  )        
}

export default ResourceButton