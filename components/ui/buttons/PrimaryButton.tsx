import React, { useState } from 'react'
import { IconLoading, Icon, AlertModal } from '../../../components'
import { Button } from '@mui/material'

export type PrimaryButtonProps = {
	color?: 'primary' | 'secondary'
	loading?: boolean
	children: React.ReactNode
	onClick: (ev: any) => void
	icon?: string
	endIcon?: string
	fullWidth?: boolean
	size?: 'small' | 'medium' | 'large'
	disabled?: boolean
  alert?: boolean
  title?: string
  description?: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
	const {
		color = 'primary',
    alert=false,
		loading,
		children,
		onClick,
		size = 'medium',
		icon,
		endIcon,
		fullWidth,
		disabled = false,
    title,
    description 
	} = props

  const [open, setOpen] = useState(false)

  const handleClick = async (ev) => {
    if(alert && !open){
      setOpen(true)
    }else{
      await onClick(ev)
      setOpen(false)
    }
  }

	return (
    <>
      <Button
        fullWidth={fullWidth}
        color={color}
        variant="contained"
        onClick={handleClick}
        disabled={disabled}
        size={size}
        endIcon={
          endIcon && (
            <Icon
              name={endIcon}
              color={
                color == 'primary'
                  ? 'primary.contrastText'
                  : 'secondary.contrastText'
              }
            />
          )
        }
        startIcon={
          <>
            {loading && loading && <IconLoading />}
            {icon && (
              <Icon
                name={icon}
                color={
                  color == 'primary'
                    ? 'primary.contrastText'
                    : 'secondary.contrastText'
                }
              />
            )}
          </>
        }
      >
        {children}
      </Button>
      <AlertModal 
        open={open}
        title={title}
        description={description}
        handleClose={() => setOpen(false)}
        handleConfirm={ handleClick }
      />
    </>
	)
}

export default PrimaryButton
