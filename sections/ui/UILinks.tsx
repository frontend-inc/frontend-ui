'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { LinkList } from '../../components'
import { LinkListProps } from '../../components/web/links/LinkList'
import { 
  SectionProps, 
  StackProps, 
  HeadingProps 
} from '../../types'

type UILinksProps = SectionProps & HeadingProps & StackProps & LinkListProps

const UILinks: React.FC<UILinksProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		variant,
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'lg',
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
			<Stack direction={direction} spacing={10}>
				<Stack direction={direction} size="1/3">
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={direction == 'row' ? 'left' : 'center'}
						size={fontSize}
						editable={editable}
						handleChange={handleChange}
					/>
				</Stack>
				<Stack direction={direction} size="2/3">
					<LinkList {...rest} variant={variant} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UILinks
