'use client'

import React from 'react'
import { Section, Stack, Row, Heading } from '../../components'
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

	const isRow = direction == 'row'

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack direction={direction}>
				<Row size={isRow ? '1/3' : 'full'}>
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={direction == 'row' ? 'left' : 'center'}
						size={fontSize}
					/>
				</Row>
				<Row size={isRow ? '2/3' : 'full'}>
					<LinkList {...rest} fill={fill} border={border} />
				</Row>
			</Stack>
		</Section>
	)
}

export default UILinkList
