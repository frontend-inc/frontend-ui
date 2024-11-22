'use client'

import React from 'react'
import { Section } from '../../components'
import { ShowContainer } from '../../components'
import { ShowContainerProps } from '../../components/cms/show/ShowContainer'
import { SectionProps } from '../../types'

type CmsShowProps = SectionProps & ShowContainerProps

const CmsShow: React.FC<CmsShowProps> = (props) => {
	const {
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		style,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={style == 'cover' ? 'none' : py}
			px={style == 'cover' ? 'none' : px}
			maxWidth={maxWidth}
		>
			<ShowContainer {...rest} style={style} />
		</Section>
	)
}

export default CmsShow
