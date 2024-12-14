'use client'

import React from 'react'
import { Section } from '../../components'
import { Html } from '../../components'
import { HtmlProps } from '../../components/ui/Html'
import { SectionProps } from '../../types'

type UIHtmlProps = SectionProps & HtmlProps

const UIHtml: React.FC<UIHtmlProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py = 'sm',
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Html {...rest} />
		</Section>
	)
}

export default UIHtml
