import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionVideos } from '../../components'
import { CollectionVideosProps } from '../../components/cms/collections/CollectionVideos'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsVideosProps = SectionProps &
	HeadingProps &
	CollectionVideosProps &
	FormProps

const CmsVideos: React.FC<CmsVideosProps> = (props) => {
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
			<CollectionVideos {...rest} />
		</Section>
	)
}

export default CmsVideos
