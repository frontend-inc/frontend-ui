'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { InputLabel } from '../../../components'
import { Button } from 'frontend-shadcn'
import { Input } from 'frontend-shadcn'
import { Slider } from 'frontend-shadcn'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from 'frontend-shadcn'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from 'frontend-shadcn'
import { ChevronDown } from 'lucide-react'
import { cn } from 'frontend-shadcn'
import {
	TAILWIND_COLOR_PICKER_MAP,
	TAILWIND_COLOR_MAP,
} from '../../../constants'

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
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className="text-foreground w-full justify-between"
					>
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
				<PopoverContent className="w-64">
					<div className="grid grid-cols-7 gap-3 mb-2">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<button
										className={cn(
											'relative bg-white h-8 w-8 rounded-md border overflow-hidden',
											value === '' &&
												'ring-2 ring-offset-2 ring-offset-background'
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
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<button
										className={cn(
											'h-8 w-8 rounded-md border',
											selectedColorName === 'white' &&
												'ring-2 ring-offset-2 ring-offset-background'
										)}
										style={{ backgroundColor: '#FFFFFF' }}
										onClick={() => handleColorChange('white')}
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>White</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<button
										className={cn(
											'h-8 w-8 rounded-md border',
											selectedColorName === 'black' &&
												'ring-2 ring-offset-2 ring-offset-background'
										)}
										style={{ backgroundColor: '#000000' }}
										onClick={() => handleColorChange('black')}
									/>
								</TooltipTrigger>
								<TooltipContent>
									<p>Black</p>
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
												value === TAILWIND_COLOR_PICKER_MAP[color][tone] &&
													'ring-2 ring-offset-2 ring-offset-background'
											)}
											style={{
												backgroundColor: TAILWIND_COLOR_PICKER_MAP[color][tone],
											}}
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
							<label className="text-sm font-medium leading-none">
								Color tone
							</label>
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
