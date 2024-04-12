import React from 'react'
import { Section, Heading } from '../../components'
import { Tabs } from '../../components'
import { TabsProps } from '../../components/web/tabs/Tabs'
import { SectionProps, HeadingProps } from '../../types'

type WebTabsProps = SectionProps & HeadingProps & TabsProps

const WebTabs: React.FC<WebTabsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		...rest
	} = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<Tabs {...rest} />
		</Section>
	)
}

export default WebTabs
