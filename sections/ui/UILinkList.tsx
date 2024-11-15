'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { LinkList } from '../../components'
import { LinkListProps } from '../../components/web/links/LinkList'
import { SectionProps, HeadingProps } from '../../types'

type UILinkListProps = SectionProps & HeadingProps & LinkListProps

const UILinkList: React.FC<UILinkListProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize,
		bgColor,
		mode,
		py,
		px,
		maxWidth='sm',
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
				<LinkList {...rest} />
			</div>
		</Section>
	)
}

export default UILinkList
