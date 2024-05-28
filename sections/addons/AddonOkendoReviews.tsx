import React from 'react'
import { Section } from '../../components'
import { OkendoReviews } from '../../components'
import { OkendoReviewsProps } from '../../components/addons/okendo/OkendoReviews'
import { SectionProps } from '../../types'

type AddonOkendoReviewsProps = SectionProps & OkendoReviewsProps

const AddonOkendoReviews: React.FC<AddonOkendoReviewsProps> = (props) => {
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
			<OkendoReviews {...rest} />
		</Section>
	)
}

export default AddonOkendoReviews
