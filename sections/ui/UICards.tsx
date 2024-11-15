'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Cards } from '../../components'
import { CardsProps } from '../../components/web/cards/Cards'
import { SectionProps, HeadingProps } from '../../types'

type UICardsProps = SectionProps & HeadingProps & CardsProps

const UICards: React.FC<UICardsProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign='center',
		bgColor,
		mode,
		py,
		px,
    fontSize,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-[40px] w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
          size={fontSize}
				/>
				<Cards {...rest} />
			</div>
		</Section>
	)
}

export default UICards
