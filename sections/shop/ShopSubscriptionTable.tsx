import React from 'react'
import { Stack } from '@mui/material'
import { Section, Heading } from '../../components'
import { SubscriptionTable } from '../../components'
import { SectionProps, HeadingProps } from '../../types'

type ShopSubscriptionTableProps = SectionProps & HeadingProps

const ShopSubscriptionTable: React.FC<ShopSubscriptionTableProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign = 'center',
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<Stack spacing={3}>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={textAlign}
				/>
				<SubscriptionTable />
			</Stack>
		</Section>
	)
}

export default ShopSubscriptionTable
