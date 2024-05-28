import React from 'react'
import { Section } from '../../components'
import { GiftUp } from '../../components'
import { GiftUpProps } from '../../components/addons/giftup/GiftUp'
import { SectionProps } from '../../types'

type AddonGiftUpProps = SectionProps & GiftUpProps

const AddonGiftUp: React.FC<AddonGiftUpProps> = (props) => {
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
			<GiftUp {...rest} />
		</Section>
	)
}

export default AddonGiftUp
