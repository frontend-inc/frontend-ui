import React from 'react'
import { Section, StripePricingTable } from '../../components'
import { StripePricingTableProps } from '../../components/addons/stripe/StripePricingTable'
import { SectionProps } from '../../types'

type AddonStripePricingTableProps = SectionProps & StripePricingTableProps

const AddonStripePricingTable: React.FC<AddonStripePricingTableProps> = (
	props
) => {
	const {
		theme,
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
			theme={theme}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<StripePricingTable {...rest} />
		</Section>
	)
}

export default AddonStripePricingTable
