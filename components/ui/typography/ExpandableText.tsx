'use client'

import React, { useState } from 'react'
import { TypographyVariantsType } from '../../../types'
import { Typography } from '../../core'
import Link from 'next/link'

const MAX_CHARS = 200

type ExpandableTextProps = {
	text: string
	variant?: TypographyVariantsType
	maxChars?: number
	color?: string
	className?: string
}

const ExpandableText: React.FC<ExpandableTextProps> = (props) => {
	const {
		text,
		className,
		variant = 'body1',
		maxChars = MAX_CHARS,
	} = props || {}
	const [open, setOpen] = useState(false)
	return (
		<div className="flex flex-col">
			{open ? (
				<Typography variant={variant} className={className}>
					{text}
				</Typography>
			) : (
				<Typography variant={variant} className={className}>
					{text?.slice(0, maxChars)}
				</Typography>
			)}
			{text?.length > maxChars && (
				<Link href="#" onClick={() => setOpen(!open)}>
					{open ? 'See less' : '... See all'}
				</Link>
			)}
		</div>
	)
}

export default ExpandableText
