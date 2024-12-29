'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@nextui-org/react'
import { ChevronDown } from 'lucide-react'
import { cn } from 'frontend-shadcn'
import { TAILWIND_COLORS, TAILWIND_COLOR_MAP } from '../../../constants'

type ThemePickerProps = {
	name: string
	value: string
	handleChange: (ev: any) => void
	placeholder?: string
}

export default function ThemePicker(props: ThemePickerProps) {

  const {
    name,
    value,
    handleChange,
    placeholder = 'Select a theme',
  } = props || {}

	const handleColorChange = (color: string) => {
		handleChange({
			target: {
				name,
				value: color,
			},
		})
	}

	return (
		<Popover>
			<PopoverTrigger>
				<Button
          fullWidth          
					variant="ghost"
					className="text-foreground justify-between"
          startContent={value && (
            <div
              className="h-5 w-5 rounded-lg"
              style={{
                backgroundColor:
                  TAILWIND_COLOR_MAP[
                    value as keyof typeof TAILWIND_COLOR_MAP
                  ],
              }}
            />
          )}
          endContent={
            <ChevronDown className="h-4 w-4" />
          }
				>
          { value || placeholder }					
				</Button>
			</PopoverTrigger>
			<PopoverContent className="bg-background z-50 w-[200px] p-0">
				<div className="grid grid-cols-5 gap-1 p-2">
					{TAILWIND_COLORS.map((color) => (
            <button
              className={cn(
                'h-8 w-8 rounded-md border',
                value === color &&
                  'ring-2 ring-offset-2 ring-offset-background'
              )}
              style={{
                backgroundColor:
                  TAILWIND_COLOR_MAP[
                    color as keyof typeof TAILWIND_COLOR_MAP
                  ],
              }}
              onClick={() => handleColorChange(color)}
            />
					))}
				</div>
			</PopoverContent>
		</Popover>
	)
}
