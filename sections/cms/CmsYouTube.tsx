import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { CollectionShowProps } from '../../components/cms/show/CollectionShow'
import { SectionProps } from '../../types'

type CmsYouTubeProps = SectionProps & CollectionShowProps

const CmsYouTube: React.FC<CmsYouTubeProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Show {...rest} style={'youtube'} />
		</Section>
	)
}

export default CmsYouTube
