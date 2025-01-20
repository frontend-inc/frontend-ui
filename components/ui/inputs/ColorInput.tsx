'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { InputLabel } from '../../../components'
import { Button } from '@nextui-org/react'
import {
	Input,
	Slider,
	Tooltip,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nextui-org/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@nextui-org/react'
import {
	TAILWIND_COLOR_PICKER_MAP,
	TAILWIND_COLOR_MAP,
} from '../../../constants'
import { useDebounce } from 'use-debounce'

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

export default function ColorInput(props: ColorInputProps) {
	const {
		label,
		name,
		value,
		placeholder = 'Color',
		disableTone = false,
		handleChange,
		info,
	} = props || {}

	const [tone, setTone] = useState(500)
  const [debouncedTone] = useDebounce(tone, 250)
	
  const [selectedColor, setSelectedColor] = useState('slate')

	const handleToneChange = (newTone: number) => {
		setTone(newTone)		
	}

  // Tone was triggered rapidly so we debounce
  useEffect(() => {
    if (selectedColor) {
			handleColorChange(selectedColor, debouncedTone)
		}
  }, [debouncedTone])

	const handleColorChange = (color: string, shade: number = tone) => {
		if (!color) return
		let newColor
		if (color === 'white' || color === 'black') {
			newColor = color === 'white' ? '#FFFFFF' : '#000000'
		} else {
			newColor = TAILWIND_COLOR_PICKER_MAP[color][shade]
		}
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
		if (value === '#FFFFFF') return 'white'
		if (value === '#000000') return 'black'
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
				<PopoverTrigger>
					<Button fullWidth variant="ghost" className="justify-between">
						{placeholder}
						<div className="flex items-center space-x-2">
							<div
								className="h-6 w-6 rounded border"
								style={{ backgroundColor: value }}
							></div>
							<ChevronDown className="h-4 w-4 opacity-50" />
						</div>
					</Button>
				</PopoverTrigger>
				<PopoverContent className="bg-content1 p-2 w-64">
					<div className="grid grid-cols-6 gap-1 mb-2">
						<Tooltip content="Remove color">
							<Button
								isIconOnly
								radius="md"
								className={cn(
									'relative bg-white h-8 w-8 min-w-8 overflow-hidden',
									value === '' && 'ring-2 ring-offset-2 ring-offset-background'
								)}
								onPress={handleRemoveColor}
							>
								<span className="sr-only">Remove color</span>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-[1px] h-[140%] bg-gray-300 rotate-45 transform origin-center"></div>
								</div>
							</Button>
						</Tooltip>
						<Tooltip content="White">
							<Button
								isIconOnly
								className={cn(
									'h-8 w-8 min-w-8',
									selectedColorName === 'white' &&
										'ring-2 ring-offset-2 ring-offset-background'
								)}
								style={{ backgroundColor: '#FFFFFF' }}
								onPress={() => handleColorChange('white')}
							/>
						</Tooltip>
						<Tooltip content="Black">
							<Button
								isIconOnly
								className={cn(
									'h-8 w-8 min-w-8',
									selectedColorName === 'black' &&
										'ring-2 ring-offset-2 ring-offset-background'
								)}
								style={{ backgroundColor: '#000000' }}
								onPress={() => handleColorChange('black')}
							/>
						</Tooltip>
						{Object.keys(TAILWIND_COLOR_PICKER_MAP).map((color) => (
							<Tooltip content={color} key={color}>
								<Button
									radius="md"
									className={cn(
										'h-8 w-8 min-w-8',
										value === TAILWIND_COLOR_PICKER_MAP[color][tone] &&
											'ring-2 ring-offset-2 ring-offset-background'
									)}
									style={{
										backgroundColor: TAILWIND_COLOR_PICKER_MAP[color][tone],
									}}
									onPress={() => handleColorChange(color)}
								/>
							</Tooltip>
						))}
					</div>
					<div className="w-full space-y-4">
						{!disableTone && (
							<Slider
								minValue={100}
								maxValue={900}
								step={100}
								value={tone}
								onChange={handleToneChange}
							/>
						)}
						<Input
							fullWidth
							label="Color"
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
