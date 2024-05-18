import React from 'react'
import { Section, Heading } from '../../components'
import { Prices } from '../../components'
import { PricesProps } from '../../components/web/prices/Prices'
import { SectionProps, HeadingProps } from '../../types'

type WebPricesProps = SectionProps & HeadingProps & PricesProps

const WebPrices: React.FC<WebPricesProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<Prices {...rest} />
		</Section>
	)
}

export default WebPrices
