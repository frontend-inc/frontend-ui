'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { PriceList } from '../../components'
import { PriceListProps } from '../../components/web/price-list/PriceList'
import { SectionProps, HeadingProps } from '../../types'

type UIPriceListProps = SectionProps & HeadingProps & PriceListProps

const UIPriceList: React.FC<UIPriceListProps> = (props) => {
	const {
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
			<div className="flex flex-col space-y-[40px] w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
          size={ fontSize }
				/>
				<PriceList {...rest} />
			</div>
		</Section>
	)
}

export default UIPriceList
