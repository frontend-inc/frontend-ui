'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionDocuments } from '../../components/cms'
import { CollectionDocumentsProps } from '../../components/cms/collection-documents/CollectionDocuments'
import { SectionProps, HeadingProps } from '../../types'

type CmsCollectionDocumentsProps = CollectionDocumentsProps &
	SectionProps &
	HeadingProps

const ShopCollectionProducts: React.FC<CmsCollectionDocumentsProps> = (
	props
) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
				/>
				<CollectionDocuments {...rest} />
			</div>
		</Section>
	)
}

export default ShopCollectionProducts
