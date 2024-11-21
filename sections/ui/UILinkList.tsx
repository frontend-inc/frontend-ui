'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { LinkList } from '../../components'
import { LinkListProps } from '../../components/web/links/LinkList'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UILinkListProps = SectionProps & HeadingProps 
  & StackProps & LinkListProps

const UILinkList: React.FC<UILinkListProps> = (props) => {
	const {
    direction='column',
    split='1/3',
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
			<Stack direction={direction} split={split}>
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
          size={fontSize}
				/>
				<LinkList {...rest} />
			</Stack>
		</Section>
	)
}

export default UILinkList
