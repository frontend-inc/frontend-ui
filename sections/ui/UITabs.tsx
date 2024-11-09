'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Tabs } from '../../components'
import { TabsProps } from '../../components/web/tabs/Tabs'
import { SectionProps, HeadingProps } from '../../types'

type UITabsProps = SectionProps & HeadingProps & TabsProps

const UITabs: React.FC<UITabsProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<Tabs {...rest} />
		</Section>
	)
}

export default UITabs
