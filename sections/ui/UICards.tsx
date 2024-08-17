import React from 'react'
import { Section, Heading } from '../../components'
import { SimpleCards } from '../../components'
import { SimpleCardsProps } from '../../components/web/cards/SimpleCards'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type UICardsProps = SectionProps & HeadingProps & SimpleCardsProps

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
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
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
          textVariant='h3'
        />
        <SimpleCards {...rest} />
      </Stack>
		</Section>
	)
}

export default UICards
