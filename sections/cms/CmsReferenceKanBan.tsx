import React from 'react'
import { Section, Heading } from '../../components'
import { ReferenceKanBanList } from '../../components'
import { KanBanListProps } from '../../components/cms/collections/KanBanList'
import { SectionProps, HeadingProps } from '../../types'

type CmsReferenceBanProps = SectionProps & HeadingProps & KanBanListProps

const CmsReferenceKanBan: React.FC<CmsReferenceBanProps> = (props) => {
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ReferenceKanBanList {...rest} />
		</Section>
	)
}

export default CmsReferenceKanBan
