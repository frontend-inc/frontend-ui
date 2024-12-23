'use client'

import React from 'react'
import { Section } from '../../components'
import { Cover } from '../../components'
import { CoverProps } from '../../components/web/covers/Cover'
import { SectionProps } from '../../types'

type UICoverProps = SectionProps & CoverProps

const UICover: React.FC<UICoverProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode = 'dark',
		px,
		py,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section mode={mode} py="none" px="none" maxWidth={maxWidth}>
			<Cover {...rest} />
		</Section>
	)
}

export default UICover
