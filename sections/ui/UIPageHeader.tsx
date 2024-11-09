'use client'

import React from 'react'
import { Section } from '../../components'
import { PageHeader } from '../../components'
import { PageHeaderProps } from '../../components/web/pages/PageHeader'
import { SectionProps } from '../../types'

type UIPageHeaderProps = SectionProps & PageHeaderProps

const UIPageHeader: React.FC<UIPageHeaderProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={6}
			px={px}
			maxWidth={maxWidth}
		>
			<PageHeader {...rest} />
		</Section>
	)
}

export default UIPageHeader
