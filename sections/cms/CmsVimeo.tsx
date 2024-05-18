import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { CollectionShowProps } from '../../components/cms/show/CollectionShow'
import { SectionProps } from '../../types'

type CmsVimeoProps = SectionProps & CollectionShowProps

const CmsVimeo: React.FC<CmsVimeoProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Show {...rest} style={'vimeo'} />
		</Section>
	)
}

export default CmsVimeo
