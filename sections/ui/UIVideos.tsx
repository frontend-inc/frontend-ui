'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Videos } from '../../components'
import { VideosProps } from '../../components/web/videos/VideoList'
import { SectionProps, HeadingProps } from '../../types'

type UIVideosProps = SectionProps & HeadingProps & VideosProps

const UIVideos: React.FC<UIVideosProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
		fontSize = 'lg',
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
    editable,
    handleChange,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-[40px] w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
					size={fontSize}
          editable={editable}
          handleChange={handleChange}
				/>
				<Videos {...rest} />
			</div>
		</Section>
	)
}

export default UIVideos
