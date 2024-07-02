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
    style,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={style == 'cover' ? 0 : py}
			px={style == 'cover' ? 0 : px}
			maxWidth={maxWidth}
		>
			<Hero {...rest} style={style} />
		</Section>
	)
}

export default CmsHero
