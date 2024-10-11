'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { InputLabel } from '../../../components'
import { Button } from "../../../shadcn/ui/button"
import { Input } from "../../../shadcn/ui/input"
import { Slider } from "../../../shadcn/ui/slider"
import { Popover, PopoverContent, PopoverTrigger } from "../../../shadcn/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../shadcn/ui/tooltip"
import { ChevronDown } from "lucide-react"
import { cn } from "../../../shadcn/lib/utils"
import { TAILWIND_COLOR_PICKER_MAP, TAILWIND_COLOR_MAP } from '../../../constants'

type ColorInputProps = {
  label?: string
  placeholder?: string
  name: string
  value: string
  handleChange: (e: { target: { name: string; value: string } }) => void
  errors?: any
  disableTone?: boolean
  info?: string
}

export default function ColorInput({
  label,
  name,
  value,
  placeholder = 'Color',
  disableTone = false,
  handleChange,
  info,
}: ColorInputProps) {
  
  const [tone, setTone] = useState(500)
  const [selectedColor, setSelectedColor] = useState('slate')

  const handleToneChange = (newTone: number[]) => {
    setTone(newTone[0])
    if (selectedColor) {
      handleColorChange(selectedColor, newTone[0])
    }
  }

  const handleColorChange = (color: string, shade: number = tone) => {
    if(!color || !shade) return;
    const newColor = TAILWIND_COLOR_PICKER_MAP[color][shade]
    setSelectedColor(color)
    handleChange({
      target: {
        name,
        value: newColor,
      },
    })
  }

  const handleHexColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let hexColor = e.target.value
    handleChange({
      target: {
        name,
        value: hexColor,
      },
    })
  }

  const handleRemoveColor = () => {
    handleChange({
      target: {
        name,
        value: '',
      },
    })
    setSelectedColor('')
  }

  const selectedColorName = useMemo(() => {
    for (const [colorName, shades] of Object.entries(TAILWIND_COLOR_MAP)) {
      if (Object.values(shades).includes(value)) {
        return colorName
      }
    }
    return ''
  }, [value])

  return (
    <div className="w-full space-y-2">
      <InputLabel label={label} info={info} />      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="text-foreground w-full justify-between">
            {placeholder}
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded border" style={{ backgroundColor: value }}></div>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="grid grid-cols-7 gap-1 mb-2">
          <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <button
                    className={cn(
                      'relative bg-white h-8 w-8 rounded-md border overflow-hidden',
                      selectedColorName === null && 'ring-2 ring-offset-2 ring-offset-background'
                    )}
                    onClick={handleRemoveColor}
                  >
                    <span className="sr-only">Remove color</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[1px] h-[140%] bg-gray-300 rotate-45 transform origin-center"></div>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Remove color</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {Object.keys(TAILWIND_COLOR_PICKER_MAP).map((color) => (
              <TooltipProvider key={color}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        'h-8 w-8 rounded-md border',
                        selectedColorName === color && 'ring-2 ring-offset-2 ring-offset-background'
                      )}
                      style={{ backgroundColor: TAILWIND_COLOR_PICKER_MAP[color][tone] }}
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
          {!disableTone && (
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Color tone</label>
              <Slider
                min={100}
                max={900}
                step={100}
                value={[tone]}
                onValueChange={handleToneChange}
              />
            </div>
          )}
          <div className="mt-2">
            <Input
              placeholder="#RRGGBB"
              value={value?.startsWith('#') ? value : ''}
              onChange={handleHexColorChange}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}