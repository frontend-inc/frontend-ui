import React from 'react'
import { Section, Heading } from '../../components'
import { ImageGrid } from '../../components'
import { ImageGridProps } from '../../components/cms/collections/ImageGrid'
import { SectionProps, HeadingProps, FormProps } from '../../types'

type CmsImagesProps = SectionProps & HeadingProps & ImageGridProps & FormProps

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
			<ImageGrid {...rest} />
		</Section>
	)
}

export default CmsImages
