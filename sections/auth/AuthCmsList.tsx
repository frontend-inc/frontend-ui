import React from 'react'
import { Section, Heading } from '../../components'
import { AuthCollection } from '../../components'
import { CollectionProps } from '../../components/cms/collections/Collection'
import { SectionProps, HeadingProps } from '../../types'

type AuthCmsListProps = SectionProps & HeadingProps & CollectionProps

const AuthCmsList: React.FC<AuthCmsListProps> = (props) => {
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
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<AuthCollection {...rest} />
		</Section>
	)
}

export default AuthCmsList
