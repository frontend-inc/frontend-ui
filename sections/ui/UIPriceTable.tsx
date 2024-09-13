import React from 'react'
import { Section, Heading } from '../../components'
import { PriceTable } from '../../components'
import { PriceTableProps } from '../../components/web/prices/PriceTable'
import { SectionProps, HeadingProps } from '../../types'

type UIPriceTableProps = SectionProps & HeadingProps & PriceTableProps

const UIPriceTable: React.FC<UIPriceTableProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={'center'}
				textVariant="h3"
			/>
			<PriceTable {...rest} />
		</Section>
	)
}

export default UIPriceTable
