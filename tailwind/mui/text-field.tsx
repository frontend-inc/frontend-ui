import React from 'react'
import { Input } from '../../shadcn/ui/input'
import { Label } from '../../shadcn/ui/label'
import { cn } from '../../shadcn/lib/utils'

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function TextField({
  label,
  helperText,
  error = false,
  fullWidth = false,
  className,
  id,
  name,
  value,
  onChange,
  ...props
}: TextFieldProps) {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className={cn('flex flex-col space-y-2', fullWidth && 'w-full')}>
      {label && (
        <Label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium',
            error ? 'text-destructive' : 'text-foreground'
          )}
        >
          {label}
        </Label>
      )}
      <Input
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          error && 'border-destructive focus:ring-destructive',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      />
      {helperText && (
        <p
          className={cn(
            'text-sm',
            error ? 'text-destructive' : 'text-muted-foreground'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  )
}

export { 
  TextField 
}