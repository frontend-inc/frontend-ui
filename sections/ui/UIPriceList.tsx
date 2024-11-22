'use client'

import React from 'react'
import { Section, Stack, Row, Heading } from '../../components'
import { PriceList } from '../../components'
import { PriceListProps } from '../../components/web/price-list/PriceList'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIPriceListProps = SectionProps &
	HeadingProps &
	StackProps &
	PriceListProps

const UIPriceList: React.FC<UIPriceListProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		bgColor,
		mode,
		py,
		px,
		maxWidth = 'sm',
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
					<PriceList {...rest} />
				</Row>
			</Stack>
		</Section>
	)
}

export default UIPriceList
