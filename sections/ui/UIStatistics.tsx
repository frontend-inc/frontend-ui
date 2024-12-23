'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { Statistics } from '../../components'
import { StatisticsProps } from '../../components/web/statistics/Statistics'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIStatisticsProps = SectionProps &
	HeadingProps &
	StackProps &
	StatisticsProps

const UIStatistics: React.FC<UIStatisticsProps> = (props) => {
	const {
		direction = 'column',
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		variant,
		bgColor,
		bgImage,
		bgOverlay,
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
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Stack direction={direction}>
				<Stack direction={direction} size="1/3" spacing={10}>
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
					<Statistics {...rest} direction={direction} variant={variant} />
				</Stack>
			</Stack>
		</Section>
	)
}

export default UIStatistics
