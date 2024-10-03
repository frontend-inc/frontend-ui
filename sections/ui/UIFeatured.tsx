import React from 'react'
import { Section, Heading } from '../../components'
import { Featured } from '../../components'
import { FeaturedProps } from '../../components/web/featured/Featured'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type UIFeaturedProps = SectionProps & HeadingProps & FeaturedProps

const UIFeatured: React.FC<UIFeaturedProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
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
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack direction="column" spacing={2}>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={'center'}
				/>
				<Featured {...rest} />
			</Stack>
		</Section>
	)
}

export default UIFeatured
