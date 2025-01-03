'use client'

import React, { useState } from 'react'
import { TypographyVariantsType } from '../../../types'
import { Typography } from '../../../components'
import { Button, ScrollShadow } from '@nextui-org/react'

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
        <ScrollShadow>
          <Typography variant={variant} className={className}>
            { text }
          </Typography>
        </ScrollShadow>
			)}
			{text?.length > maxChars && (
				<Button variant="light" onPress={() => setOpen(!open)}>
					{open ? 'See less' : '... See all'}
				</Button>
			)}
		</div>
	)
}

export default ExpandableText
