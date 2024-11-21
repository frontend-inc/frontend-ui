'use client'

import React from 'react'
import { Section, Stack, Heading } from '../../components'
import { PriceList } from '../../components'
import { PriceListProps } from '../../components/web/price-list/PriceList'
import { SectionProps, StackProps, HeadingProps } from '../../types'

type UIPriceListProps = SectionProps & HeadingProps 
  & StackProps & PriceListProps

const UIPriceList: React.FC<UIPriceListProps> = (props) => {
	const {
    direction='column',
    split='1/3',
		label,
		title,
		subtitle,
		textAlign='center',
    fontSize='md',
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
          size={ fontSize }
				/>
				<PriceList {...rest} />
			</Stack>
		</Section>
	)
}

export default UIPriceList
