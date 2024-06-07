import React from 'react'
import { Section } from '../../../components'
import { AddonGoogleMap } from '../../../components'
import { AddonGoogleMapProps } from '../../../components/cms/addons/AddonGoogleMap'
import { SectionProps } from '../../../types'

type CmsGoogleMapProps = SectionProps & AddonGoogleMapProps

const CmsGoogleMap: React.FC<CmsGoogleMapProps> = (props) => {
	const {
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
			<AddonGoogleMap {...rest} />
		</Section>
	)
}

export default CmsGoogleMap
