'use client'

import React from 'react'
import { Section } from '../../components'
import { Hero } from '../../components'
import { HeroProps } from '../../components/ui/heros/Hero'
import { SectionProps } from '../../types'

type UIHeroProps = SectionProps & HeroProps

const UIHero: React.FC<UIHeroProps> = (props) => {
	const {
		fill,
		border,
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'xl',
		requireAuth,
		style,
		...rest
	} = props

	const fullWidth = style == 'spotlight' || style == 'cover' ? true : false

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={fullWidth ? 'none' : py}
			px={fullWidth ? 0 : px}
			maxWidth={maxWidth}
			fill={fill}
			border={border}
		>
			<Hero {...rest} style={style} />
		</Section>
	)
}

export default UIHero
