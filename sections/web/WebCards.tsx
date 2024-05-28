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
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
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
