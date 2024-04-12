import React from 'react'
import { Section, Heading } from '../../components'
import { Cards } from '../../components'
import { CardsProps } from '../../components/web/cards/Cards'
import { SectionProps, HeadingProps } from '../../types'

type WebCardsProps = SectionProps & HeadingProps & CardsProps

const WebCards: React.FC<WebCardsProps> = (props) => {
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
			<Cards {...rest} />
		</Section>
	)
}

export default WebCards
