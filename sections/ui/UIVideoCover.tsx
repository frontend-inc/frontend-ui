'use client'

import React from 'react'
import { Section } from '../../components'
import { VideoCover } from '../../components'
import { VideoCoverProps } from '../../components/web/covers/VideoCover'
import { SectionProps } from '../../types'

type UIVideoCoverProps = SectionProps & VideoCoverProps

const UIVideoCover: React.FC<UIVideoCoverProps> = (props) => {
	const { bgColor, mode, px, py, maxWidth, requireAuth, ...rest } = props

	return (
		<Section mode="dark" py="none" px='none' maxWidth={maxWidth}>
			<VideoCover {...rest} />
		</Section>
	)
}

export default UIVideoCover
