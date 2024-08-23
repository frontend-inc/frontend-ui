import React from 'react'
import { Section, Heading } from '../../components'
import { Likes } from '../../components'
import { DataListProps } from '../../components/cms/data/DataList'
import { SectionProps, HeadingProps } from '../../types'

type SocialLikesProps = SectionProps & HeadingProps & DataListProps

const SocialLikes: React.FC<SocialLikesProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
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
			<Likes {...rest} />
		</Section>
	)
}

export default SocialLikes
