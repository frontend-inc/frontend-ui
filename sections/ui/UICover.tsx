import React from 'react'
import { Section } from '../../components'
import { Cover } from '../../components'
import { CoverProps } from '../../components/web/covers/Cover'
import { SectionProps } from '../../types'

type UICoverProps = SectionProps & CoverProps

const UICover: React.FC<UICoverProps> = (props) => {
	const {
		enableTransitions,
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
			enableTransitions={enableTransitions}
			theme={theme}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Cover {...rest} />
		</Section>
	)
}

export default UICover
