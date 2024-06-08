import React from 'react'
import { Section, Heading } from '../../../components'
import { AddonGoogleMap } from '../../../components'
import { AddonGoogleMapProps } from '../../../components/cms/addons/AddonGoogleMap'
import { SectionProps, HeadingProps } from '../../../types'

type CmsGoogleMapProps = SectionProps & HeadingProps & AddonGoogleMapProps

const CmsGoogleMap: React.FC<CmsGoogleMapProps> = (props) => {
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
			<AddonGoogleMap {...rest} />
		</Section>
	)
}

export default CmsGoogleMap
