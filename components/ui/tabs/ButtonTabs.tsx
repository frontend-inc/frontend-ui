import React from 'react'
import { Tabs, TabsList, TabsTrigger } from "../../../shadcn/ui/tabs"
import { Icon } from '../../../components'

type ButtonTabsProps = {
  handleChange: (value: string) => void
  options: {
    icon?: string
    label?: string
    value: string
  }[]
  className?: string
  value: string  
}

export default function ButtonTabs({
  handleChange,
  options,
  value,
  className='w-full'
}: ButtonTabsProps) {

  return (
    <Tabs value={value} onValueChange={handleChange}>
      <TabsList className={className}>
        {options.map((tab, i) => {        
          return (
            <TabsTrigger
              key={i}
              value={tab.value}
              className={`w-full flex items-center justify-center space-x-2`}
            >
              { tab.icon && (
                <Icon name={ tab.icon } /> 
              )}
              { tab.label && tab.label }
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}