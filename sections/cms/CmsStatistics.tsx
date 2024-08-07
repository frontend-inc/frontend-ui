import React from 'react'
import { Section, Heading } from '../../components'
import { Statistics } from '../../components'
import { StatisticsProps } from '../../components/cms/analytics/Statistics'
import { SectionProps, HeadingProps } from '../../types'

type CmsStatisticsProps = SectionProps & HeadingProps & StatisticsProps

const CmsStatistics: React.FC<CmsStatisticsProps> = (props) => {
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
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
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
			<Statistics {...rest} />
		</Section>
	)
}

export default CmsStatistics
