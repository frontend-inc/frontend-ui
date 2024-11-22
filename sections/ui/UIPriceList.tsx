'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
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
					<PriceList {...rest} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UIPriceList
