import React from 'react'
import { Section, Heading } from '../../components'
import { AuthForeignCollection } from '../../components'
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection'
import { SectionProps, HeadingProps } from '../../types'

type AuthCmsForeignCollectionProps = SectionProps &
	HeadingProps &
	ForeignCollectionProps

const AuthCmsForeignCollection: React.FC<AuthCmsForeignCollectionProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		...rest
	} = props

	return (
		<Section
			requireAuth
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<AuthForeignCollection {...rest} />
		</Section>
	)
}

export default AuthCmsForeignCollection
