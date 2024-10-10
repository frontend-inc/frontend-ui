'use client'

import React from 'react'
import { Button } from "../../../shadcn/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../../../shadcn/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../shadcn/ui/tooltip"
import { ChevronDown } from "lucide-react"
import { cn } from "../../../shadcn/lib/utils"

const TAILWIND_COLORS = ['light', 'dark', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

const TAILWIND_COLOR_MAP = {
  light: '#ffffff',
  dark: '#000000',
  slate: '#64748b',
  gray: '#6b7280',
  zinc: '#71717a',
  neutral: '#737373',
  stone: '#78716c',
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  lime: '#84cc16',
  green: '#22c55e',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  rose: '#f43f5e',
}

type ThemePickerProps = {
  name: string
  value: string
  handleChange: (ev: any) => void
  placeholder?: string
}

export default function ThemePicker({ name, value, handleChange, placeholder = 'Select a theme' }: ThemePickerProps) {

  const handleColorChange = (color: string) => {
    handleChange({
      target: {
        name,
        value: color
      }
    })    
  }
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[200px] text-foreground justify-between">
          {value ? (
            <div className="flex items-center gap-2">
              <div 
                className="h-4 w-4 rounded-full" 
                style={{ backgroundColor: TAILWIND_COLOR_MAP[value as keyof typeof TAILWIND_COLOR_MAP] }}
              />
              {value}
            </div>
          ) : (
            placeholder
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <div className="grid grid-cols-5 gap-1 p-2">
          {TAILWIND_COLORS.map((color) => (
            <TooltipProvider key={color}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={cn(
                      'h-8 w-8 rounded-md border',
                      value === color && 'ring-2 ring-offset-2 ring-offset-background'
                    )}
                    style={{ backgroundColor: TAILWIND_COLOR_MAP[color as keyof typeof TAILWIND_COLOR_MAP] }}
                    onClick={() => handleColorChange(color)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{color}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>        
      </PopoverContent>
    </Popover>
  )
}