import React from 'react'
import { SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'
import { Tabs, TabsList, TabsTrigger } from "../../../shadcn/ui/tabs"
import { cn } from "../../../shadcn/lib/utils"

type TabsInputProps = {
  name: string
  label?: string
  handleChange: (ev: SyntheticEventType) => void
  options: {
    icon?: string
    label?: string
    value: number
  }[]
  value: number
  disablePadding?: boolean
  disableBorder?: boolean
  iconPosition?: 'start' | 'end' | 'top' | 'bottom'
  variant?: 'fullWidth' | 'scrollable'
  size?: 'small' | 'large'
  direction?: 'row' | 'column'
  info?: string
  debounceDelay?: number
  disableDebounce?: boolean
}

export default function TabsInput({
  name,
  label,
  disablePadding = false,
  disableBorder = false,
  handleChange,
  options,
  value,
  iconPosition = 'start',
  variant = 'fullWidth',
  size = 'large',
  direction = 'row',
  info,
  debounceDelay,
  disableDebounce,
}: TabsInputProps) {
  const handleInputChange = (value: string) => {
    handleChange({
      target: {
        name,
        value: parseInt(value, 10),
      },
    })
  }

  return (
    <div className={cn(
      "flex",
      direction === 'row' ? "flex-row items-center" : "flex-col",
      "justify-between w-full space-y-1"
    )}>
      <InputLabel label={label} info={info} />
      <Tabs
        defaultValue={value.toString()}
        onValueChange={handleInputChange}
        className={cn(
          disablePadding ? "p-0" : "p-1",
          disableBorder ? "border-0" : "border border-input",
          "rounded-md"
        )}
      >
        <TabsList className={cn(
          "w-full",
          size === 'small' ? "h-8" : "h-10"
        )}>
          {options.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value.toString()}
              className={cn(
                "flex items-center",
                size === 'small' ? "text-sm" : "text-base",
                iconPosition === 'start' || iconPosition === 'end' ? "flex-row" : "flex-col",
                iconPosition === 'end' || iconPosition === 'bottom' ? "flex-row-reverse" : ""
              )}
            >
              {option.icon && (
                <span className={cn(
                  "inline-block",
                  iconPosition === 'start' || iconPosition === 'end' ? "mr-2" : "mb-1"
                )}>
                  {option.icon}
                </span>
              )}
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}