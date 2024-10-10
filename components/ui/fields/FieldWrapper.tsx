import React from 'react'
import { Icon } from '../../../components'
import { cn } from "../../../shadcn/lib/utils"

type FieldWrapperProps = {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  label?: string
  icon?: string
  color?: string
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  disablePadding?: boolean
  enableBorder?: boolean
  children?: React.ReactNode
  className?: string
}

const FieldWrapper: React.FC<FieldWrapperProps> = (props) => {
  const {
    direction = 'column',
    label,
    icon,
    color = 'text-muted-foreground',
    alignItems = 'flex-start',
    enableBorder = false,
    disablePadding = false,
    children,
    className,
  } = props || {}

  const wrapperClasses = cn(
    'w-full',
    direction === 'row' && 'flex-row',
    direction === 'column' && 'flex-col',
    direction === 'row-reverse' && 'flex-row-reverse',
    direction === 'column-reverse' && 'flex-col-reverse',
    alignItems === 'flex-start' && 'items-start',
    alignItems === 'center' && 'items-center',
    alignItems === 'flex-end' && 'items-end',
    alignItems === 'stretch' && 'items-stretch',
    alignItems === 'baseline' && 'items-baseline',
    !disablePadding && 'space-y-1',
    enableBorder && 'p-1.5 rounded border border-border',
    className
  )

  const labelClasses = cn(
    'w-full',
    (direction === 'row' || direction === 'row-reverse') && 'min-w-[100px] w-[100px] pr-1'
  )

  return (
    <div className={wrapperClasses}>
      {label && (
        <div className={labelClasses}>
          <span className={`text-xs ${color}`}>{label}</span>
        </div>
      )}
      <div className="flex flex-row space-x-1">
        {icon && <Icon name={icon} className={color} />}
        {children}
      </div>
    </div>
  )
}

export default FieldWrapper