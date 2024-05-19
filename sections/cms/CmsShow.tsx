import React from 'react'
import { Section } from '../../components'
import { CollectionShow } from '../../components'
import { CollectionShowProps } from '../../components/cms/show/CollectionShow'
import { SectionProps } from '../../types'

type CmsShowProps = SectionProps & CollectionShowProps

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
			<CollectionShow {...rest} />
		</Section>
	)
}

export default CmsShow
