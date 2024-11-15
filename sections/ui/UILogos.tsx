'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Logos } from '../../components'
import { LogosProps } from '../../components/web/logos/Logos'
import { SectionProps, HeadingProps } from '../../types'

type UILogosProps = SectionProps & HeadingProps & LogosProps

const UILogos: React.FC<UILogosProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize,
		bgColor,
		mode,
		py,
		px,
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
          size={fontSize}
				/>
				<Logos {...rest} />
			</div>
		</Section>
	)
}

export default UILogos
