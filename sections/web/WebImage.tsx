import React from 'react'
import { Section } from '../../components'
import { Image } from '../../components'
import { ImageProps } from '../../components/ui/images/Image'
import { SectionProps } from '../../types'

type WebImageProps = SectionProps & ImageProps

const WebImage: React.FC<WebImageProps> = (props) => {
	const {
		bgcolor,
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
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Image {...rest} />
		</Section>
	)
}

export default WebImage
