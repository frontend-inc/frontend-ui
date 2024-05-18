import React from 'react'
import { Section, Heading } from '../../components'
import { Featured } from '../../components'
import { FeaturedProps } from '../../components/web/featured/Featured'
import { SectionProps, HeadingProps } from '../../types'

type WebFeaturedProps = SectionProps & HeadingProps & FeaturedProps

const WebFeatured: React.FC<WebFeaturedProps> = (props) => {
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
		...rest
	} = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
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

export default WebFeatured
