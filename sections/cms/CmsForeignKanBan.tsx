import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollectionKanBan } from '../../components'
import { ForeignCollectionKanBanProps } from '../../components/cms/collections/ForeignCollectionKanBan'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignKanBanProps = SectionProps & HeadingProps & ForeignCollectionKanBanProps

const CmsForeignKanBan: React.FC<CmsForeignKanBanProps> = (props) => {
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
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ForeignCollectionKanBan {...rest} />
		</Section>
	)
}

export default CmsForeignKanBan
