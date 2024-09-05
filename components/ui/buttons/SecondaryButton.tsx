import React from 'react';
import { PrimaryButton } from '../..'

export type SecondaryButtonProps = {
  loading?: boolean
  children: string
  icon?: string
  onClick: (ev: any) => void
  fullWidth?: boolean
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <PrimaryButton
      { ...props }
      color='secondary'
    />
  )
}

export default SecondaryButton