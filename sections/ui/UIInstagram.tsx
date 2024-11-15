'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { InstagramPosts } from '../../components'
import { InstagramPostProps } from '../../components/web/instagram/InstagramPosts'
import { SectionProps, HeadingProps } from '../../types'

type UIInstagramProps = SectionProps & HeadingProps & InstagramPostProps

const UIInstagram: React.FC<UIInstagramProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
    fontSize,
		bgColor,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
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
				/>
				<InstagramPosts {...rest} />
			</div>
		</Section>
	)
}

export default UIInstagram
