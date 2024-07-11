import React from 'react'
import { Section } from '../../components'
import { CoverCarousel } from '../../components'
import { CoverCarouselProps } from '../../components/web/covers/CoverCarousel'
import { SectionProps } from '../../types'

type UICoverCarouselProps = SectionProps & CoverCarouselProps

const UICoverCarousel: React.FC<UICoverCarouselProps> = (props) => {
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
			<CoverCarousel {...rest} />
		</Section>
	)
}

export default UICoverCarousel
