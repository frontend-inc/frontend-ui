import React from 'react'
import { Section } from '../../components'
import { Hero } from '../../components'
import { HeroItemProps } from '../../components/cms/heros/Hero'
import { SectionProps } from '../../types'

type CmsHeroProps = SectionProps & HeroItemProps

const CmsHero: React.FC<CmsHeroProps> = (props) => {
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
			<Hero {...rest} />
		</Section>
	)
}

export default CmsHero
