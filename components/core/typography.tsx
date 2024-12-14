'use client'

import React, { useState, useEffect } from 'react'
import { cn } from 'frontend-shadcn'
import { SyntheticEventType } from '../../types'
import { useDebounce } from 'use-debounce'

interface TypographyProps {
	variant:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'button'
		| 'caption'
		| 'overline'
		| 'destructive'
	textAlign?: 'left' | 'center' | 'right'
	className?: string
	editable?: boolean
	name?: string
	handleChange?: (ev: SyntheticEventType) => void
	children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = (props) => {
	const {
		variant,
		textAlign = 'left',
		className,
		children,
		name='text',
		editable,
		handleChange,
	} = props

  const [text, setText] = useState(children)
  const [debouncedText] = useDebounce(text, 350)

	const variantClasses = {
		h1: 'text-5xl sm:text-7xl font-semibold tracking-tight',
		h2: 'text-4xl sm:text-5xl font-semibold tracking-tight',
		h3: 'text-3xl sm:text-4xl font-semibold tracking-tight',
		h4: 'text-3xl font-semibold tracking-tight',
		h5: 'text-2xl font-semibold tracking-tight',
		h6: 'text-xl font-semibold tracking-tight',
		subtitle1: 'text-xl font-normal tracking-tight leading-relaxed',
		subtitle2: 'text-lg leading-relaxed',
		button: 'text-base',
		body1: 'text-md leading-normal',
		body2: 'text-sm leading-normal',
		caption: 'text-xs',
		overline: 'text-xs uppercase tracking-widest',
		destructive: 'text-destructive text-sm italic',
	}

	const fontFamily = {
		h1: 'font-header',
		h2: 'font-header',
		h3: 'font-header',
		h4: 'font-header',
		h5: 'font-header',
		h6: 'font-header',
		subtitle1: 'font-header',
		subtitle2: 'font-header',
		button: 'font-body',
		body1: 'font-body',
		body2: 'font-body',
		caption: 'font-body',
		overline: 'font-body',
		destructive: 'font-body',
	}

	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right',
	}

	const handleInputChange = (ev: SyntheticEventType) => {
		if (!handleChange) return null
    //@ts-ignore
    setText(ev.target.innerText)		
	}

  useEffect(() => {
    if(handleChange && debouncedText !== children) {
      handleChange({ target: { name, value: debouncedText } })
    }
  }, [debouncedText])

	return (
		<div
			contentEditable={editable}
			// @ts-ignore
			onInput={handleInputChange}
			suppressContentEditableWarning
			className={cn(
				'text-foreground outline-none focus:outline-none focus:ring-0',
				editable && 'cursor-text',
				fontFamily[variant],
				variantClasses[variant],
				alignmentClasses[textAlign],
				className
			)}
		>
			{children}
		</div>
	)
}

export { Typography }
