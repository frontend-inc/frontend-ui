import React from 'react'
import { Section, Heading } from '../../components'
import { Purchases } from '../../components'
import { PurchasesProps } from '../../components/commerce/purchases/Purchases'
import { SectionProps, HeadingProps } from '../../types'

type CommercePurchasesProps = SectionProps & HeadingProps & PurchasesProps

const CommercePurchases: React.FC<CommercePurchasesProps> = (props) => {
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
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
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
				textAlign={textAlign}
			/>
			<Purchases {...rest} />
		</Section>
	)
}

export default CommercePurchases
