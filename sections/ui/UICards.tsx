import React from 'react'
import { Section, Heading } from '../../components'
import { Cards } from '../../components'
import { CardsProps } from '../../components/web/cards/Cards'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type UICardsProps = SectionProps & HeadingProps & CardsProps

const UICards: React.FC<UICardsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack spacing={2}>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={'center'}
					textVariant="h3"
				/>
				<Cards {...rest} />
			</Stack>
		</Section>
	)
}

export default UICards
