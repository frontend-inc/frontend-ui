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
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
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
			<PriceTable {...rest} />
		</Section>
	)
}

export default UIPriceTable
