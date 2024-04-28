import React from 'react'
import { Section, Heading } from '../../components'
import { Comments } from '../../components'
import { CommentsProps } from '../../components/social/comments/Comments'
import { SectionProps, HeadingProps } from '../../types'

type SocialCommentsProps = SectionProps & HeadingProps & CommentsProps

const SocialComments: React.FC<SocialCommentsProps> = (props) => {
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
			<Comments {...rest} />
		</Section>
	)
}

export default SocialComments
