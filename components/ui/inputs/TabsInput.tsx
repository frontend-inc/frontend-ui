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
  variant?: 'fullWidth' | 'scrollable'
  direction?: 'row' | 'column'
  info?: string
}

export default function TabsInput({
  name,
  label,
  handleChange,
  options,
  value,
  direction = 'row',
  info,
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
        className="rounded-md"
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
                "flex items-center text-sm",
              )}
            >
              {option.icon && (
                <span className={cn(
                  "inline-block",
                  icon && "mr-2"
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