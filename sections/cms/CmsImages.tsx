import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionImages } from '../../components'
import { CollectionImagesProps } from '../../components/cms/collections/CollectionImages'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsImagesProps = SectionProps &
	HeadingProps &
	CollectionImagesProps &
	FormProps

const CmsImages: React.FC<CmsImagesProps> = (props) => {
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
			<CollectionImages {...rest} />
		</Section>
	)
}

export default CmsImages
