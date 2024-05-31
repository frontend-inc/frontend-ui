import React from 'react'
import { Section, Heading } from '../../components'
import { Featured } from '../../components'
import { FeaturedProps } from '../../components/web/featured/Featured'
import { SectionProps, HeadingProps } from '../../types'

type UIFeaturedProps = SectionProps & HeadingProps & FeaturedProps

const UIFeatured: React.FC<UIFeaturedProps> = (props) => {
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
			<Featured {...rest} />
		</Section>
	)
}

export default UIFeatured
