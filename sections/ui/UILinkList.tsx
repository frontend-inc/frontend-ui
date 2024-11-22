'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { LinkList } from '../../components'
import { LinkListProps } from '../../components/web/links/LinkList'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UILinkListProps = SectionProps & HeadingProps & StackProps & LinkListProps

const UILinkList: React.FC<UILinkListProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'lg',
		fill,
		border,
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'lg',
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
			<Stack direction={direction} spacing={10}>
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={direction == 'row' ? 'left' : 'center'}
						size={fontSize}
					/>
				</Stack>
				<Stack direction={direction} size="2/3">
					<LinkList {...rest} fill={fill} border={border} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UILinkList
