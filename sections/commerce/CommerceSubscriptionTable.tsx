import React from 'react'
import { Stack } from '@mui/material'
import { Section, Heading } from '../../components'
import { SubscriptionTable } from '../../components'
import { SectionProps, HeadingProps } from '../../types'

type CommerceSubscriptionTableProps = SectionProps & HeadingProps

const CommerceSubscriptionTable: React.FC<CommerceSubscriptionTableProps> = (
	props
) => {
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
		requireTeam,
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
			requireTeam={requireTeam}
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

export default CommerceSubscriptionTable
