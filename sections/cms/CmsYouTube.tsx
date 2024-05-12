import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { ShowProps } from '../../components/cms/show/Show'
import { SectionProps } from '../../types'

type CmsYouTubeProps = SectionProps & ShowProps

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
