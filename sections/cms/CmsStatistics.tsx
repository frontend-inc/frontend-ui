import React from 'react'
import { Section, Heading } from '../../components'
import { Statistics } from '../../components'
import { StatisticsProps } from '../../components/cms/analytics/Statistics'
import { SectionProps, HeadingProps  } from '../../types'

type CmsStatisticsProps = SectionProps & 
  HeadingProps & 
  StatisticsProps

const CmsStatistics: React.FC<CmsStatisticsProps> = (props) => {
  
	const {
    label,
    title,
    description,
    textAlign,
		theme,
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
			theme={theme}
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
