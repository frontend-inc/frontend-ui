import React from 'react'
import { Section } from '../../components'
import { Show } from '../../components'
import { ShowProps } from '../../components/cms/show/Show'
import { SectionProps } from '../../types'

type CmsShowProps = SectionProps & ShowProps

const CmsShow: React.FC<CmsShowProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		style,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			mode={mode}
			py={style == 'cover' ? 0 : py}
			px={style == 'cover' ? 0 : px}
			maxWidth={maxWidth}
		>
			<Show {...rest} style={style} />
		</Section>
	)
}

export default CmsShow
