import React from 'react'
import { Section, Heading } from '../../components'
import { DataTableList } from '../../components'
import { DataTableListProps } from '../../components/cms/collections/DataTableList'
import { SectionProps, HeadingProps } from '../../types'

type CmsTableProps = SectionProps & HeadingProps & DataTableListProps

const CmsTable: React.FC<CmsTableProps> = (props) => {
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
			<DataTableList {...rest} />
		</Section>
	)
}

export default CmsTable
