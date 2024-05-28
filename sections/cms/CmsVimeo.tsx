import React from 'react'
import { Section } from '../../components'
import { CollectionShow } from '../../components'
import { CollectionShowProps } from '../../components/cms/show/CollectionShow'
import { SectionProps } from '../../types'

type CmsVimeoProps = SectionProps & CollectionShowProps

const CmsVimeo: React.FC<CmsVimeoProps> = (props) => {
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
			<CollectionShow {...rest} style={'vimeo'} />
		</Section>
	)
}

export default CmsVimeo
