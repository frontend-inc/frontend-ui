import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { ShowProps } from '../../components/cms/show/CollectionShow'
import { SectionProps } from '../../types'

type CmsShowProps = SectionProps & ShowProps

const CmsShow: React.FC<CmsShowProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Show {...rest} />
		</Section>
	)
}

export default CmsShow
