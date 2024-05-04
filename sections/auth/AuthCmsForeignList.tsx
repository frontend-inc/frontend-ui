import React from 'react'
import { Section, Heading } from '../../components'
import { AuthForeignCollection } from '../../components'
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection'
import { SectionProps, HeadingProps } from '../../types'

type AuthCmsForeignListProps = SectionProps &
	HeadingProps &
	ForeignCollectionProps

const AuthCmsForeignList: React.FC<AuthCmsForeignListProps> = (props) => {
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
			<AuthForeignCollection {...rest} />
		</Section>
	)
}

export default AuthCmsForeignList
