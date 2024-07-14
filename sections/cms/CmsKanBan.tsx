import React from 'react'
import { Section, Heading } from '../../components'
import { KanBanList } from '../../components'
import { KanBanListProps } from '../../components/cms/collections/KanBanList'
import { SectionProps, HeadingProps } from '../../types'

type CmsKanBanProps = SectionProps & HeadingProps & KanBanListProps

const CmsKanBan: React.FC<CmsKanBanProps> = (props) => {
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
		requireAdmin,
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
			requireAdmin={requireAdmin}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<KanBanList {...rest} />
		</Section>
	)
}

export default CmsKanBan
