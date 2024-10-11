import React from 'react'
import Link from 'next/link'
import { FieldWrapper } from '../../../components'

type FieldURLProps = {
  value?: string
  label?: string
  color?: string
  [key: string]: any // for ...rest props
}

const FieldURL: React.FC<FieldURLProps> = (props) => {
  const { value, label, color, ...rest } = props

  return (
    <FieldWrapper label={label} color={color} {...rest}>
      {value && (
        <Link 
          className="p-0 h-auto text-muted-foreground hover:text-foreground" 
          href={value} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {value}
        </Link>
      )}
    </FieldWrapper>
  )
}

export default FieldURL