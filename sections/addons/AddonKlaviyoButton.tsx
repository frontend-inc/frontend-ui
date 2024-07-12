import React from 'react'
import { Section } from '../../components'
import { KlaviyoButton } from '../../components'
import { KlaviyoButtonProps } from '../../components/addons/klaviyo/KlaviyoButton'
import { SectionProps } from '../../types'

type AddonKlaviyoButtonProps = SectionProps & KlaviyoButtonProps

const AddonKlaviyoButton: React.FC<AddonKlaviyoButtonProps> = (props) => {
	const {
		mode,
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<KlaviyoButton {...rest} />
		</Section>
	)
}

export default AddonKlaviyoButton
