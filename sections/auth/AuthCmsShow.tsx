import React from 'react'
import { Section } from '../../components'
import { AuthShow } from '../../components'
import { ShowProps } from '../../components/cms/show/Show'
import { SectionProps } from '../../types'

type AuthCmsShowProps = SectionProps & ShowProps

const AuthCmsShow: React.FC<AuthCmsShowProps> = (props) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section
			requireAuth
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<AuthShow {...rest} />
		</Section>
	)
}

export default AuthCmsShow
