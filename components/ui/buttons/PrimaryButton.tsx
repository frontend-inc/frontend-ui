import React from 'react';
import { IconLoading, Icon } from '../../../components'
import { Button } from '@mui/material'

export type PrimaryButtonProps = {
  color?: 'primary' | 'secondary'
  loading?: boolean
  children: string
  onClick: (ev: any) => void
  icon?: string
  fullWidth?: boolean 
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const {
    color='primary',
    loading,
    children,
    onClick,
    icon,
    fullWidth
  } = props

  return (
    <Button
      fullWidth={fullWidth}
      color={ color }
      variant="contained"
      onClick={onClick}
      startIcon={
        <>
          { loading && <IconLoading loading={loading} /> }
          { icon && (
            <Icon 
              name={icon} 
              color={ 
                color == 'primary' ? 
                  'primary.contrastText' : 
                  'secondary.contrastText' 
                } 
              /> 
            )
          }
        </>
      }      
    >
      {children}
    </Button>
  )
}

export default PrimaryButton