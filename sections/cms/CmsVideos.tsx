import React from 'react'
import { Section, Heading } from '../../components'
import { VideoGrid } from '../../components'
import { VideoGridProps } from '../../components/cms/collections/VideoGrid'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsVideosProps = SectionProps & HeadingProps & VideoGridProps & FormProps

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
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<VideoGrid {...rest} />
		</Section>
	)
}

export default CmsVideos
